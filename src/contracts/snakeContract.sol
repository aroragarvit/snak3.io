// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract snakeContract {
    mapping(address => uint256) public deposits;

    function makeDeposit() external payable {
        deposits[msg.sender] = msg.value;
    }

    function returnDeposits(address winner, address looser) external {}
}
