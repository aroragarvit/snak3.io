// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract snakeContract {
    
    mapping(address => uint256) public vault; // vault is public so anyone is able to see it

    event moneyDeposited(address indexed sender, uint256 amount);
    event moneyWithdrawn(address indexed receiver, uint256 amount);
    event moneyTransferred(address indexed sender, address indexed receiver, uint256 amount);

    function makeDeposit() external payable {
        vault[msg.sender] += msg.value;         
        emit moneyDeposited(msg.sender, msg.value);
    }

    function checkOthersDeposit(address checker) external view returns (uint256) {
        return vault[checker];
    }

    function checkMyDeposit() external view returns (uint256) {
        return vault[msg.sender];
    }
    
    function sendMoney(address receiver, uint256 amount) external payable{
        require(vault[msg.sender] >= amount);
        vault[msg.sender] -= amount;
        vault[receiver] += amount;
        emit moneyTransferred(msg.sender, receiver, amount);
    }

    function withdrawDeposits(uint256 amount) external payable {
        require(vault[msg.sender] >= amount, "Not enough tokens");
        payable(msg.sender).transfer(amount);
        vault[msg.sender] -= amount;
        emit moneyWithdrawn(msg.sender, amount);
    }

    
}
