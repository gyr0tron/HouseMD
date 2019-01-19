pragma solidity ^0.5.0;
contract auction{
    address owner;
    uint status;
    uint public currentBid;
    address public currentBidder;
    
    modifier isOpen(){
        require(status == 1);
        _;
    }
    
    modifier isOwner(){
        require(msg.sender == owner);
        _;
    }
    
    constructor(uint maxAmount) public {
        status = 1;
        owner = msg.sender;
        currentBid = maxAmount;
    }
    
    function bid(uint amount) public isOpen{
        require(currentBid > amount);
        currentBid = amount;
        currentBidder = msg.sender;
    }
    
    function close() public isOwner{
        status = 0;
    }
}