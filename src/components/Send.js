// make all necessary changes
import Popup from "reactjs-popup";
import { useState, useEffect } from "react";
import {
  getVaultBalance,
  sendMoney,
  getVaultBalanceOf,
} from "../scripts/services";

//useEffect(() => {
//  getVaultBalanceOf_(addressOf);
//  console.log(balance);                     // every time address is changed set vault balance of user
//  console.log(addressOf);
//}, [addressOf]);

export const Send = ({
  popupSend,
  setPopupSend,
  sendAmount,
  setSendAmount,
  getBalance,
}) => {
  const [addressOf, setAddressOf] = useState("");
  const [balanceOf, setBalanceOf] = useState(0);

  const getVaultBalanceOf_ = async (address) => {
    setBalanceOf(await getVaultBalanceOf(address)); // Set vault balance of user accordingly
  };

  return (
    <Popup
      position="center center"
      open={popupSend}
      closeOnDocumentClick
      closeOnEscape
      onClose={() => {
        setPopupSend(false);
      }}
      overlayStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      height={5000}
    >
      <div
        style={{
          backgroundColor: "",
          border: "3px solid black",
          borderRadius: "8px",
          height: "20rem",
          width: "40rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Enter Address and amount to send</p>
        <input
          type="number"
          value={sendAmount}
          onChange={(e) => {
            setSendAmount(e.target.value);
          }}
        />

        <input
          type="text"
          value={addressOf}
          onChange={(e) => {
            setAddressOf(e.target.value);
          }}
        />

        <button
          onClick={() => {
            getVaultBalanceOf_(addressOf).then(() => {
              console.log(balanceOf).then(() => {
                sendMoney(sendAmount).then(() => {
                  console.log("Money Sent");
                  getBalance();
                  getVaultBalanceOf_(addressOf).then(() => {
                    console.log(
                      "balance of sender  as well as receiver updated "
                    );
                  });
                });
              });
            });
          }}
        >
          Send
        </button>
      </div>
    </Popup>
  );
};
