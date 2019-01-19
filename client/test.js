var Web3 = require('web3');
const deploy = require('./deployer.js')

//const web3 = new Web3('https://rinkeby.infura.io/v3/22be87df8e694b33a0c0b7acf4d67e9d');

function isInstalled() 
{
    if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
        //Only execute when we are in the browser
        web3 = new Web3(window.web3.currentProvider);
    } else {
        //We are on the server or use does not have Metamask
        const provider = new Web3.providers.HttpProvider(
            "https://rinkeby.infura.io/v3/22be87df8e694b33a0c0b7acf4d67e9d"
        );
        web3 = new Web3(provider);
    }
}

function isLocked() 
{
    web3.eth.getAccounts(function(err, accounts){
       if (err != null) {
          console.log(err)
       }
       else if (accounts.length === 0) {
          console.log('MetaMask is locked')
       }
       else {
          console.log('MetaMask is unlocked')
       }
    });
}

function checkBalance() 
{

}
 

async function addContract(){
    var result = await deploy(maxVal);
    return result
};

isInstalled();
isLocked();