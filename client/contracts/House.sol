pragma solidity >=0.4.22 <0.6.0;

contract House {
    
    address manager;
    mapping (address => address) owner;
    string[] public documents;
    string ipfsHash;
    
    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }
    
    constructor () public payable {
        manager = msg.sender;
        owner[address(this)] = msg.sender;
    }
    
    function sellHouse (uint _value, address payable _receiver) onlyManager public {
        owner[address(this)] = _receiver;
    }
    
    function paybills(address payable receiver,uint amount) public{
        require(address(this).balance >= amount);
        receiver.transfer(amount);
    }

    function addHash(string memory _hash) onlyManager public {
        documents.push(_hash);
    }

    function retrieveHash() onlyManager public {
         ipfsHash = documents[0];
    }
    
    
}

