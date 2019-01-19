const path = require('path');
const fs = require('fs');
const solc = require('solc');

const auctionPath = path.resolve(__dirname, 'contracts', 'auction.sol');
const source = fs.readFileSync(auctionPath, 'utf8');

console.log (solc.compile(source, 1).contracts[':auction'])
