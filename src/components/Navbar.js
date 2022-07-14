import { useState, useEffect } from "react";
import { connect, getWalletAddress, isConnected } from "../scripts/services";

const Navbar = ({ connected, setConnected, message, setMessage }) => {
  const [walletaddress, setwalletaddress] = useState("");

  // event listener for when the user disconnects to the wallet or changes their account
  window.ethereum.on("accountsChanged", () => {
    setConnected(false);
    setMessage("You have been disconnected from the wallet");
    window.location.reload();
  });
  useEffect(
    () =>
      async function () {
        const isConnected_ = await isConnected();
        console.log(isConnected_);
        if (isConnected_) {
          setConnected(true);
          getWalletAddress().then((address) => {
            setwalletaddress(address);
          });
        } else {
          setConnected(false);
          setMessage("You are disconnected from the Ethereum network");
        }
      },
    []
  );

  return (
    <nav
      style={{
        borderBottom: "3px solid black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <h1>Snak3</h1>
      <button
        style={{
          height: "30px",
          padding: "0 20px",
          backgroundColor: "#FCC5C0",
          border: "2px solid black",
          fontSize: "1rem",
          borderStyle: "groove",
        }}
        onClick={() => {
          connect()
            .then(() => {
              setConnected(true);
              getWalletAddress().then((address) => {
                setConnected(true);
                setwalletaddress(address);
                setMessage("You have been connected to the wallet");
              });
            })
            .catch((err) => {
              setMessage(err);
            });
        }}
      >
        {connected ? walletaddress : "Connect"}
      </button>
    </nav>
  );
};
export default Navbar;
