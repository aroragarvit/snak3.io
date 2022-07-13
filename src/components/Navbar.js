import { useState, useEffect } from "react";
import {
  connect,
  getWalletAddress,
} from "/home/garvit/programming/snake/src/scripts/services";

const Navbar = ({ connected, setConnected, message, setMessage }) => {
  const [walletaddress, setwalletaddress] = useState("");

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
                setwalletaddress(address);
              });
            })
            .catch((err) => {
              setMessage(err);
            });
        }}
      >
        {connected ? walletaddress : "connect"}
      </button>
    </nav>
  );
};
export default Navbar;
