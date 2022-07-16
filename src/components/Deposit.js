import Popup from "reactjs-popup";
import { getVaultBalance, makeDeposit } from "../scripts/services";
export const Deposit = ({
  popup,
  setPopup,
  depositAmount,
  setDepositAmount,
  getBalance,
}) => {
  return (
    <Popup
      position="center center"
      open={popup}
      closeOnDocumentClick
      closeOnEscape
      onClose={() => {
        setPopup(false);
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
        <p>Enter amount to deposit</p>
        <input
          type="number"
          value={depositAmount}
          onChange={(e) => {
            setDepositAmount(e.target.value);
          }}
        />
        <button
          onClick={() => {
            makeDeposit(depositAmount).then(() => {
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
      </div>
    </Popup>
  );
};
