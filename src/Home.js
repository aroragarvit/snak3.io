import Navbar from "./components/Navbar";
import Vault from "./components/Vault";
//import {
//  connect,
//  getWalletAddress,
//  getGlobalBalance,
//  getVaultBalance,
//  getVaultBalanceOf,
//  makeDeposit,
//  makeWithdraw,
//} from "./scripts/services";
import { useState, useEffect } from "react";

const Home = () => {
  //  const [walletaddress, setwalletaddress] = useState("");
  //  const [status, setstatus] = useState("connect");
  //  const [globalBalance, setGlobalBalance] = useState("Fetching....");
  //  const [vaultBalance, setVaultBalance] = useState("Fetching....");
  //  const [amount, setAmount] = useState(0);
  //  const [withdrawAmount, setWithdrawAmount] = useState(0);
  //  const [sendAmount, setSendAmount] = useState(0);
  //
  //  const getBalance = async () => {
  //    // setGlobalBalance(await getGlobalBalance());
  //    // setVaultBalance(await getVaultBalance());
  //    const balance = await getVaultBalance();
  //    setVaultBalance(parseInt(balance) / 10 ** 18);
  //    const gBalance = await getGlobalBalance();
  //    setGlobalBalance(parseInt(gBalance) / 10 ** 18);
  //  };

  return (
    <div className="home">
      <Vault />

      {/*<button
     //   onClick={() => {
     //     // IF i refresh page and even its connected it shows connect option so check it using meta mask api and  also reload automatically if is ever disconnected
     //     connect()
     //       .then(() => {
     //         setstatus("connected");
     //         getWalletAddress().then((address) => {
     //           setwalletaddress(address);
     //           getBalance();
     //         });
     //       })
     //       .catch((err) => {
     //         setstatus("error");
     //       });
     //   }}
     // >
     //   {status}
     // </button>
     // <h2>user {walletaddress} is connected</h2>
     // <h2>global balance {globalBalance}</h2>
     // <h2>vault balance {vaultBalance.toString()}</h2>

      <input
        type="number"
        placeholder="amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          makeDeposit(amount).then(() => {
            console.log("deposit made");
            getBalance()
              .then(() => {
                console.log("balance updated");
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }}
      >
        Deposit
      </button>

      <input
        type="text"
        placeholder="amount"
        onChange={(e) => {
          setWithdrawAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          makeWithdraw(withdrawAmount).then(() => {
            console.log("deposit made");
            getBalance()
              .then(() => {
                console.log("balance updated");
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }}
      >
        withdrawAmount
      </button>

      <input
        type="text"
        placeholder="amount"
        onChange={(e) => {
          setWithdrawAmount(e.target.value);
        }}
      />
      <br></br>
      <input
        type="text"
        placeholder="amount"
        onChange={(e) => {
          setSendAmount(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="amount"
        onChange={(e) => {
          setSendAmount(e.target.value);
        }}
      />

      <button
        onClick={() => {
          makeWithdraw(withdrawAmount).then(() => {
            console.log("deposit made");
            getBalance()
              .then(() => {
                console.log("balance updated");
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }}
      >
        withdrawAmount
      </button>*/}
    </div>
  );
};

export default Home;
