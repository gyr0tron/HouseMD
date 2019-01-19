
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
    //Mnemonic
    "ranch hospital false mirror despair expose enable control consider security cute defy",
    //Infura Rinkeby API Key
    'https://rinkeby.infura.io/v3/403f8a0c54b04ed399a02ef50e43469a'
);

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '4700000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
    console.log("-------------------");
    console.log("ABI: ", result.options.jsonInterface);
};
deploy();