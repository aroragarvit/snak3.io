import { FiSend } from "react-icons/fi";
import { getVaultBalance } from "../scripts/services";
import { useState, useEffect } from "react";
import { Deposit } from "./Deposit";
import { Withdraw } from "./Withdraw";
import { Send } from "./Send";

const Vault = () => {
  const [vaultBalance, setVaultBalance] = useState("Fetching....");
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [sendAmount, setSendAmount] = useState(0);
  const [popupDeposit, setPopupDeposit] = useState(false);
  const [popupWithdraw, setPopupWithdraw] = useState(false);
  const [popupSend, setPopupSend] = useState(false);

  const getBalance = async () => {
    const balance = await getVaultBalance();
    setVaultBalance(parseInt(balance) / 10 ** 18);
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div
      style={{
        height: "20rem",
        width: "40rem",
        border: "3px solid black",
        borderRadius: "8px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Vault's Header */}
      <div
        style={{
          backgroundColor: "#FCC5C0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem",
          borderBottom: "3px solid black",
          paddingLeft: "17.5rem",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "2.5rem",
            fontWeight: "regular",
          }}
        >
          Vault
        </p>

        <button
          style={{
            all: "unset",
            cursor: "pointer",
          }}
          onClick={() => {
            setPopupSend(true);
          }}
        >
          <FiSend size={25} />
        </button>
      </div>
      <div
        style={{
          // bring to center of div
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "3rem",
          }}
        >
          {vaultBalance}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button
          style={{
            width: "100%",
            fontSize: "1.5rem",
            borderRadius: "0px 0px 0px 8px",
            background: "rgba(232, 160, 191, 1)",
          }}
          onClick={() => {
            setPopupDeposit(true);
          }}
        >
          Deposit
        </button>
        <button
          style={{
            width: "100%",
            fontSize: "1.5rem",
            borderRadius: "0px 0px 8px 0px",
            background: "rgba(232, 160, 191, 1)", // Not able to send background color
          }}
          onClick={() => {
            setPopupWithdraw(true);
          }}
        >
          Withdraw
        </button>
      </div>
      <Deposit
        popupDeposit={popupDeposit}
        setPopupDeposit={setPopupDeposit}
        depositAmount={depositAmount}
        setDepositAmount={setDepositAmount}
        getBalance={getBalance}
      />
      <Withdraw
        popupWithdraw={popupWithdraw}
        setPopupWithdraw={setPopupWithdraw}
        withdrawAmount={withdrawAmount}
        setWithdrawAmount={setWithdrawAmount}
        getBalance={getBalance}
      />
      <Send
        popupSend={popupSend}
        setPopupSend={setPopupSend}
        sendAmount={sendAmount}
        setSendAmount={setSendAmount}
        getBalance={getBalance}
      ></Send>
    </div>
  );
};
export default Vault;
