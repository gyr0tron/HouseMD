import { abi, address} from './contract.js';
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const provider = new HDWalletProvider(
    //Mnemonic
    "chair inch unusual slam lava present office position address easy valley junior",
    //Infura Rinkeby API Key
    'https://ropsten.infura.io/v3/22be87df8e694b33a0c0b7acf4d67e9d'
);

const web3 = new Web3(provider);

let bytecode ="0x608060405234801561001057600080fd5b506040516020806103028339810180604052602081101561003057600080fd5b810190808051906020019092919050505060018081905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600281905550506102638061009f6000396000f3fe608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806343d726d614610067578063454a2ab31461007e578063d33db697146100b9578063def1810114610110575b600080fd5b34801561007357600080fd5b5061007c61013b565b005b34801561008a57600080fd5b506100b7600480360360208110156100a157600080fd5b81019080803590602001909291905050506101a0565b005b3480156100c557600080fd5b506100ce61020b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561011c57600080fd5b50610125610231565b6040518082815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561019657600080fd5b6000600181905550565b600180541415156101b057600080fd5b806002541115156101c057600080fd5b8060028190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6002548156fea165627a7a7230582088dd4a5595e984031df3f012a5019c696fbffc085431014563ecd904f82e96c20029"

let Dabi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "bid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "close",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "maxAmount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currentBid",
		"outputs": [
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
		"constant": true,
		"inputs": [],
		"name": "currentBidder",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
async function deploy(maxVal){
    //Get a list of all accounts
    const accounts = await web3.eth.getAccounts();
    //console.log(accounts[0])
    //console.log(bytecode)
    var value = parseInt(maxVal,10)
    var result = await new web3.eth.Contract(Dabi).deploy({ data: bytecode, arguments: [value] }).send({ from: accounts[0], gas: '4700000' });
    //console.log(result)
    console.log("Contract deployed at ", result.options.address);
    //console.log("ABI: ",result.options.jsonInterface);
    // var prefs = new Preferences('cryptodoc');
    // prefs.address = result.options.address;
    // prefs.abi = JSON.stringify(result.options.jsonInterface);
    return result.options.address;
};

async function payBill(addr,val){
	const accounts = await web3.eth.getAccounts();
	var value = parseInt(val,10);
	console.log("XXXXX",addr,val)
	var contract = await new web3.eth.Contract(abi,address);
	console.log(contract);
	// contract.methods.paybills(addr, value).send({
	// 	from: accounts[0],
	// 	gasLimit: 1000000,
	// })

}

export {
	deploy,
	payBill
};

