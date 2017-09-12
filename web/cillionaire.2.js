var KOVAN = {"endpoint":"https://kovan.infura.io/", "address":"0x80aad41565ccaabbf6184fe6b3674c08b1d42578", "units":"ETH", "etherscanURL":"https://kovan.etherscan.io/address/"};
var MAIN_INFURA = {"endpoint":"https://mainnet.infura.io/", "address":"0x663a5cA0295231B0d88afB1C557a8D8f4C1B6459", "units":"ETH", "etherscanURL":"https://etherscan.io/address/"};
var MAIN_MYETHERAPI = {"endpoint":"https://api.myetherapi.com/eth", "address":"0x663a5cA0295231B0d88afB1C557a8D8f4C1B6459", "units":"ETH", "etherscanURL":"https://etherscan.io/address/"};
var ABI  = [{"constant":true,"inputs":[],"name":"duration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxDonors","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_queryId","type":"bytes32"},{"name":"_result","type":"string"},{"name":"_proof","type":"bytes"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"startNextRound","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_oraclizeCallbackGasPrice","type":"uint256"}],"name":"setOraclizeCallbackGasPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nextRoundDuration","type":"uint256"}],"name":"setNextRoundDuration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"donors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oraclizeCallbackGas","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextRoundDonation","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nextRoundDonation","type":"uint256"}],"name":"setNextRoundDonation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"donation","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextRoundMaxDonors","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"setContractOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"endTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxFeePercentage","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextRoundFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"nextRoundDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"retainBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"donationSum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nextRoundFee","type":"uint256"}],"name":"setNextRoundFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"donate","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_oraclizeCallbackGas","type":"uint256"}],"name":"setOraclizeCallbackGas","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nextRoundMaxDonors","type":"uint256"}],"name":"setNextRoundMaxDonors","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_beneficiary","type":"address"},{"indexed":false,"name":"_startTimestamp","type":"uint256"},{"indexed":false,"name":"_endTimestamp","type":"uint256"},{"indexed":false,"name":"_maxDonors","type":"uint256"},{"indexed":false,"name":"_duration","type":"uint256"},{"indexed":false,"name":"_donation","type":"uint256"},{"indexed":false,"name":"_fee","type":"uint256"}],"name":"NewRoundStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_donor","type":"address"},{"indexed":false,"name":"_donationAfterFee","type":"uint256"},{"indexed":false,"name":"_fee","type":"uint256"}],"name":"NewDonor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_beneficiary","type":"address"},{"indexed":false,"name":"_donationSum","type":"uint256"}],"name":"RoundEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_randomNumber","type":"uint256"}],"name":"RandomNumber","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"ContractOwnershipTransferred","type":"event"}];

var network = null;
var Web3 = require('web3');
var web3 = null;
var cillionaire = null;

$(function () {
	setNetwork(MAIN_INFURA);
	bindUi();
	updatePeriodically();
});

function bindUi() {
	$("#network").change(onChangeNetwork);
	$("#btnDonate").click(onClickDonate);
}

function onChangeNetwork() {
	var n = $("#network").val();
	if (n=="Mainnet (MyEtherApi)") {
		setNetwork(MAIN_MYETHERAPI);
	} else if (n=="Mainnet (Infura)") {
		setNetwork(MAIN_INFURA);
	} else if (n=="Kovan Testnet (Infura)"){
		setNetwork(KOVAN);
	}
}

async function updatePeriodically() {
	await sleep(60000 * 5);
	update();
	updatePeriodically();
}

function setNetwork(_network) {
	$("#loading").css("display", "block");
	$("#contractDetails").css("display", "none");
	clearContractUI();
	showActions(-1);
	network = _network;
	web3 = new Web3(new Web3.providers.HttpProvider(network.endpoint));
	cillionaire = web3.eth.contract(ABI).at(network.address);
	update();
}

function update() {
	$("#contractError").css("display", "none");
	try {
		updateContractUI();
	} catch (err) {
		console.log(err);
		clearContractUI();
		$("#contractError").html(err.message.replace(/(\r\n|\n|\r|\\r|\\n)/gm, "")+"<br>");
		$("#contractError").css("display", "block");
	}
}

function onChangeNetwork() {
	var n = $("#network").val();
	if (n=="Mainnet (MyEtherApi)") {
		setNetwork(MAIN_MYETHERAPI);
	} else if (n=="Mainnet (Infura)") {
		setNetwork(MAIN_INFURA);
	} else if (n=="Kovan Testnet (Infura)"){
		setNetwork(KOVAN);
	}
}

function onClickDonate() {
	launchMyEtherWalletTransaction(network.address, cillionaire.donation(), cillionaire.donate.getData());
}

function clearContractUI() {
	showActions(-1);
	$("#contractBeneficiary").html("");
	$('#contractDonationSum').html("");
	$('#contractRoundStartedAt').html("");
	$('#contractRoundEndsAt').html("");
	$("#btnDonate").text("Donate ... ETH");
	$("#donation").text("...");
	$('#fee').text("...");	
}

function updateContractUI() {
	$("#contractBeneficiary").html(cillionaire.beneficiary());
	$('#contractDonationSum').html(formatEth(cillionaire.donationSum()));
	$('#contractStartTimestamp').html(formatTimestamp(cillionaire.startTimestamp()));
	$('#contractEndTimestamp').html(formatTimestamp(cillionaire.endTimestamp()));
	var donation = cillionaire.donation();
	$("#btnDonate").text("> Donate "+formatEth(donation)+ " <");
	$("#donation").text(formatEth(donation.minus(cillionaire.fee())));
	$('#fee').text(formatEth(cillionaire.fee()));
	$("#manualAddress").html(etherscanLink(network.address));
	$("#manualAmount").text(formatEthWithoutUnits(donation));
	var data = cillionaire.donate.getData();
	$("#manualGasLimit").text(getGasLimit(network.address, donation, data));
	$("#manualData").text(data);
	showActions(parseInt(cillionaire.state()));
}

function showActions(state) {
	$("#divActions").css("display", state==1 ? "block" : "none");
	$("#divRoundComplete").css("display", state==0 ? "block" : "none");
}

function formatEth(wei) {
	return wei.dividedBy(1E18).toString() + ' ' + network.units;
}

function formatEthWithoutUnits(wei) {
	return wei.dividedBy(1E18).toString();
}

function formatTimestamp(timestamp) {
	var t = new Date( timestamp * 1000 ); 
	return t.toUTCString();
}

function etherscanLink(address) {
	return '<a href="'+network.etherscanURL+address+'">'+address+'</a>';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function launchMyEtherWalletTransaction(to, valueWei, data) {
	$("#actionsError").css("display", "none");
	setNetwork(network); // work around metamask injecting its own web3 which breaks the following line:
	var gasLimit = getGasLimit(to, valueWei, data);
	var val = valueWei == 0 ? "0" : valueWei.dividedBy(1E18).toString();
	var url = "https://www.myetherwallet.com/?to="+to+"&value="+val+"&data="+data+"&gaslimit="+gasLimit.toString()+"#send-transaction"
	var win = window.open(url, '_blank');
	if (win) {
	    win.focus();
	} else {
		$("#actionsErrorText").html("Your browser blocks popups. Please visit MyEtherWallet through the following link:<br><a href='"+url+"' target='_blank'>"+url+"</a>");
	    $("#actionsError").css("display", "block");
	}
}

function getGasLimit(to, valueWei, data) {
	return Math.round(web3.eth.estimateGas({
	    "to": to, 
	    "data": data,
		"value": valueWei
	}) * 1.1); // Gas Estimation doesn't work (on Kovan at least), ran out of gas more than once. Set a higher limit than estimated to work around that.
}
