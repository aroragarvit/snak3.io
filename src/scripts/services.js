import {ethers} from "ethers";
import snakeContract from  "/home/garvit/programming/snake/src/artifacts/src/contracts/snakeContract.sol/snakeContract.json"

const abi = snakeContract.abi
const contractAddress = "0xf173d147e7d0bc358a0969a6a50d503b899c1101"	
async function connect() {
    if(window.ethereum){
      await window.ethereum.request({method : "eth_requestAccounts"})
    }
    else
    {
        console.log("no metamask");
    }
}

async function getwalletaddress(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress , abi , signer)
    return signer.getAddress();
    console.log(signer.getChainId());
    }

export  {connect , getwalletaddress}



