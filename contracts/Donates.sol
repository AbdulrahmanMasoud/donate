// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./DonateInterface.sol";

contract Donates is DonateInterface {

    address public owner;

    constructor(){
        owner = msg.sender;
    }

    //middelwar
    modifier isOwner{
        require(msg.sender == owner, "Owner only can withdraw");
        _;
    }

    uint public ids;

    mapping(uint=>address) private donateers;
    mapping(address=>bool) private isDonate;

    //Donate
    function donate() override payable external{
        address donateer =  msg.sender;

        if(!isDonate[donateer]){
            uint id = ids++;
            donateers[id] = donateer;
            isDonate[donateer] = true;
        }

    }

    //Get Contract Balance
    function getContractBalance()public view isOwner returns(uint){
        return address(this).balance;
    }


    //Withdraw
    function withdraw(uint amount) override external isOwner{
        require(amount  <= 2000000000000000, "Should be less than 0.02 Eher");
        payable(msg.sender).transfer(amount);
    }


}