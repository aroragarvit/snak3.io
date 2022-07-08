require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

console.log(process.env.API_URL)
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  paths: {
    sources: "./src/contracts",
    tests: "./src/test",
    cache: "./cache",
    artifacts: "./src/artifacts"
  }
}