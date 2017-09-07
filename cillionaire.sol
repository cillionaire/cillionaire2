/*
 * Copyright 2017 Cillionaire /u/cillionaire (0x3baadba0da3f22e5b86581d686a2bde9a54aa0b4)
 * Copyright of oraclizeAPI.sol is held by Oraclize Ltd. - We use the API and code from the example here: 
 *   https://github.com/oraclize/ethereum-examples/tree/master/solidity/random-datasource
 */
 
pragma solidity 0.4.16;
import "github.com/oraclize/ethereum-api/oraclizeAPI.sol";

contract owned {
    
    address public owner;
    
    event ContractOwnershipTransferred(address newOwner);
    
    function owned() { owner = msg.sender; }
    
    modifier onlyOwner { 
        require(msg.sender == owner); 
        _; 
    }
    
    function setContractOwner(address newOwner) external onlyOwner  {
        owner = newOwner;
        ContractOwnershipTransferred(newOwner);
    }
}
 
contract mortal is owned {
    
    function kill() onlyOwner {
        selfdestruct(owner);
    }
}

contract Cillionaire is mortal, usingOraclize {

    enum State { ENDED, DONATE }
    uint public constant maxFeePercentage = 10;
    uint public constant retainBalance = 0.01 ether;
    uint public constant oraclizeMinCallbackGas = 180000;
    uint public constant oraclizeMinCallbackGasPrice = 20000000000 wei; // 20 gwei
    
    // state vars for current round
    address public beneficiary;
    address[] public donors;
    State public state;
    uint public startTimestamp;
    uint public endTimestamp;
    uint public maxDonors;
    uint public duration;
    uint public donation;
    uint public fee;
    uint public donationSum;
    uint public numDonors;
    
    // parameter vars that can be set by owner
    uint public nextRoundMaxDonors;
    uint public nextRoundDuration;
    uint public nextRoundDonation;
    uint public nextRoundFee;
    uint public oraclizeCallbackGas;

    event NewRoundStarted(address _beneficiary, uint _startTimestamp, uint _endTimestamp, uint _maxDonors, uint _duration, uint _donation, uint _fee);
    event NewDonor(address _donor, uint _donationAfterFee, uint _fee);
    event RoundEnded(address _beneficiary, uint _donationSum);
    event RandomNumber(uint _randomNumber);

    modifier onlyState(State _state) { 
        require(state == _state); 
        _; 
    }
    
    modifier onlyOraclize() {
        require(msg.sender == oraclize_cbAddress());
        _;
    }

    function Cillionaire() {
        oraclize_setProof(proofType_Ledger);
        state = State.ENDED;
        oraclizeCallbackGas = oraclizeMinCallbackGas;
        setOraclizeCallbackGasPrice(25000000000 wei);
        nextRoundMaxDonors = 100000;
        nextRoundDuration = 600 seconds;
        nextRoundDonation = 0.01 ether;
        nextRoundFee = 0.0005 ether;
        startRound(owner);
    }

    function startRound(address _beneficiary) internal onlyState(State.ENDED) {
        numDonors = 0;
        donationSum = 0;
        beneficiary = _beneficiary;
        maxDonors = nextRoundMaxDonors;
        duration = nextRoundDuration;
        donation = nextRoundDonation;
        fee = nextRoundFee;
        startTimestamp = block.timestamp;
        endTimestamp = startTimestamp + duration;
        state = State.DONATE;
        NewRoundStarted(beneficiary, startTimestamp, endTimestamp, maxDonors, duration, donation, fee);
    }

    function donate() external payable onlyState(State.DONATE) {
        require(msg.value == donation);
        uint amountAfterFee = msg.value - fee;
        donationSum += amountAfterFee; 
        if (numDonors == donors.length) { // https://ethereum.stackexchange.com/questions/3373/how-to-clear-large-arrays-without-blowing-the-gas-limit
            donors.length += 1;
        }
        donors[numDonors++] = msg.sender;
        NewDonor(msg.sender, amountAfterFee, fee);
        if ((block.timestamp >= endTimestamp) || (donors.length >= maxDonors)) {
            endRoundAndStartNextRound();
        }
        // try sending money to beneficiary. If that doesn't work e.g. because the beneficiary is a malicous gas-draining contract, then end the round and give the money back to the donor.
        require(this.balance >= amountAfterFee); // fail if there's not enough balance left. that would be the case if Oraclize cost would be taken from this donation.
        if (!beneficiary.send(amountAfterFee)) {
            if (state != State.ENDED) { // don't end round twice.
                endRoundAndStartNextRound();
            }
            msg.sender.send(msg.value); // refund everything. 
        }
    }

    function endRoundAndStartNextRound() internal { 
        state = State.ENDED;
        RoundEnded(beneficiary, donationSum);
        bytes32 queryId = oraclize_newRandomDSQuery(0, 7, oraclizeCallbackGas);
    }

    function __callback(bytes32 _queryId, string _result, bytes _proof) onlyOraclize onlyState(State.ENDED) oraclize_randomDS_proofVerify(_queryId, _result, _proof) {
        uint randomNumber = uint(sha3(_result)); // https://gitter.im/oraclize/ethereum-api?at=595b98d7329651f46e5105b7
        RandomNumber(randomNumber);
        address nextBeneficiary = numDonors == 0 ? owner : donors[randomNumber % numDonors];
        startRound(nextBeneficiary);
    }

    // Owner functions and setters for parameter vars
    
    // Fail-safe in case callback doesn't work the first time. In this case the owner can trigger random number generation again, thereby starting the next round. 
	// It can be called in ENDED state or if it is time to end the round.
    function startNextRound() external payable onlyOwner onlyState(State.ENDED) {
        endRoundAndStartNextRound();
    }
    
    function deposit() external payable onlyOwner {
        // allow to deposit ether in case we run out of money for the Oraclize calls.
    }
    
    function withdraw() external onlyOwner {
        require(this.balance > retainBalance);
        uint amount = this.balance - retainBalance; // prevent owner from starving Oraclize
        owner.transfer(amount);
    }
    
    function setNextRoundMaxDonors(uint _nextRoundMaxDonors) external onlyOwner {
        nextRoundMaxDonors = _nextRoundMaxDonors;
    }

    function setNextRoundDuration(uint _nextRoundDuration) external onlyOwner {
        nextRoundDuration = _nextRoundDuration;
    }

    function setNextRoundDonation(uint _nextRoundDonation) external onlyOwner {
        nextRoundDonation = _nextRoundDonation;
        if (nextRoundFee > nextRoundDonation / maxFeePercentage) {
            nextRoundFee = nextRoundDonation / maxFeePercentage;
        }
    }

    function setNextRoundFee(uint _nextRoundFee) external onlyOwner {
        require(_nextRoundFee <= nextRoundDonation / maxFeePercentage);
        nextRoundFee = _nextRoundFee;
    }

    function setOraclizeCallbackGas(uint _oraclizeCallbackGas) external onlyOwner {
        require(_oraclizeCallbackGas >= oraclizeMinCallbackGas); // prevent owner from starving Oraclize
        oraclizeCallbackGas = _oraclizeCallbackGas;
    }

    function setOraclizeCallbackGasPrice(uint _oraclizeCallbackGasPrice) public onlyOwner {
        require(_oraclizeCallbackGasPrice >= oraclizeMinCallbackGasPrice); // prevent owner from starving Oraclize
        oraclize_setCustomGasPrice(_oraclizeCallbackGasPrice); // default is 20 Gwei, i.e. 20000000000 wei
    }
}