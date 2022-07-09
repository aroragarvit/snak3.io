// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract snakeContract {
    mapping(address => uint256) public deposits;

    function makeDeposit() external payable {
        deposits[msg.sender] = msg.value;
    }

    function withdrawDeposits(uint256 amount) external {
        require(deposits[msg.sender] >= amount, "Not enough tokens");
        payable(msg.sender).transfer(amount);
    }

    function seeDeposit(address checker) external view returns (uint256) {
        return deposits[checker];
    }
}
