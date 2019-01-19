// const path = require('path');
// const fs = require('fs');
// const solc = require('solc');

// const auctionPath = path.resolve(__dirname, 'contracts', 'auction.sol');
// const source = fs.readFileSync(auctionPath, 'utf8');

// module.exports = solc.compile(source, 1).contracts[':Auction'];

const path = require('path');
const fs = require('fs');
const solc = require('solc');
const myContractPath = path.resolve(__dirname, 'contracts', 'auction.sol');
const sourceCode = fs.readFileSync(myContractPath, 'utf8');
console.log(solc.compile(sourceCode, 1));
module.exports = solc.compile(sourceCode, 1).contracts[':auction'];