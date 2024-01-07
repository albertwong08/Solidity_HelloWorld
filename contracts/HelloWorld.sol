//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract AWHelloWorld {
    event messagechanged(string oldmsg, string newmsg);
    string public message;
                
    constructor(string memory firstmessage) {
        message = firstmessage;   
    }
            
    function update(string memory newmesssage) public {
        string memory oldmsg = message;
        message = newmesssage;
        emit messagechanged(oldmsg, newmesssage);
    }

    function append(string memory newPart) public{
        string memory oldmsg = message;
        message = string.concat(oldmsg,newPart);
        emit messagechanged(oldmsg, message);
        
    }

    function seeMessage() view public returns (string memory) {
        return message;
    }
}