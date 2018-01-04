var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

var contractAddress = "0x13476191cbf06b2802495f7a736e95e2f74885f8";
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fName",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setInstructor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInstructor",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "age",
				"type": "uint256"
			}
		],
		"name": "Instructor",
		"type": "event"
	}
];

var CoursetroContract = web3.eth.contract(abi);
var Coursetro = CoursetroContract.at(contractAddress);
//console.log(Coursetro);

web3.eth.defaultAccount = web3.eth.accounts[0];

Coursetro.setInstructor.getData("Brutis", 63);
Coursetro.setInstructor("Brutis", 62);
Coursetro.getInstructor();
console.log(Coursetro.getInstructor());
