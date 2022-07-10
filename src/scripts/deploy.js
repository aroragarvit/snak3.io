const { ethers } = require("hardhat");

async function main(){
   const snakeContract = await ethers.getContractFactory("snakeContract");
   const depolyedSnakeContract = await snakeContract.deploy();
   await depolyedSnakeContract.deployed();
   console.log("Deployed to:"+depolyedSnakeContract.address)

}

main();
