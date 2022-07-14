import { ethers } from "ethers";
import snakeContract from "../artifacts/src/contracts/snakeContract.sol/snakeContract.json";

const abi = snakeContract.abi;
const contractAddress = "0x29fCAe3Ca2f73b38795383Ed8b3A0921BE8ea41D";

async function connect() {
  //if (window.ethereum)
  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (err) {
    throw Error("err");
  }
}

async function getWalletAddress() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  return signer.getAddress(); // check things based on we are getting address or not  so we are connected to contract or not and if connected then do things after words make a state for that
}
async function isConnected() {
  if (window.ethereum) {
    const eth = await window.ethereum;
    const provider = new ethers.providers.Web3Provider(eth);
    const signer = await provider.getSigner();
    try {
      await signer.getAddress();
      return true;
    } catch {
      return false;
    }
  }
}

async function getGlobalBalance() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  return signer.getBalance();
}

async function getVaultBalance() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  return contract.checkMyDeposit();
}

async function getVaultBalanceOf(address) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  return contract.checkOthersDeposit(address);
}

async function makeDeposit(amount) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const txn = await contract.makeDeposit({
    value: ethers.utils.parseEther(amount),
  });
  return txn.wait();
}

async function makeWithdraw(amount) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const txn = await contract.withdrawDeposits(ethers.utils.parseEther(amount)); // withdraw more than balance in vault make try catch
  return txn.wait();
}

export {
  connect,
  getWalletAddress,
  getGlobalBalance,
  getVaultBalance,
  getVaultBalanceOf,
  makeDeposit,
  makeWithdraw,
  isConnected,
};
