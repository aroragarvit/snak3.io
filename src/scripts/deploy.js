const { ethers } = require("hardhat");

async function main(){
   const snakeContract = await ethers.getContractFactory("snakeContract");
   const depolyedSnakeContract = await snakeContract.deploy();
   await depolyedSnakeContract.deployed();
   console.log("Deployed to:"+depolyedSnakeContract.address)
//    await depolyedSnakeContract.makeDeposit({
//     value: ethers.utils.parseUnits("0.005", "ether"),
//    })
//    const balace = await depolyedSnakeContract.seeDeposit("f7493CD3a4eB81b97CE0Bf211772caa39a9Ef93A");
//    console.log(balace);
}

main();
