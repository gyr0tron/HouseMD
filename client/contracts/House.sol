pragma solidity >=0.4.22 <0.6.0;

contract House {
    
    address manager;
    mapping (address => address) owner;
    
    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }
    
    constructor () public {
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
    
    
}
