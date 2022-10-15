require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
API_URL =
  "https://polygon-mumbai.g.alchemy.com/v2/cAdXkHsxE7T69wRiJ7JsY-cvs81ImEqX";
PRIVATE_KEY =
  "c4dfb729241b35f08a2f4faf8a9e4ca81cecfd90bdb9a82ded7b83637774d163";
console.log(process.env.API_URL);
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    polygon: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  paths: {
    sources: "./src/contracts",
    tests: "./src/test",
    cache: "./cache",
    artifacts: "./src/artifacts",
  },
};
