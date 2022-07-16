import Popup from "reactjs-popup";
import { getVaultBalance, makeWithdraw } from "../scripts/services";
export const Withdraw = ({
  popupWithdraw,
  setPopupWithdraw,
  withdrawAmount,
  setWithdrawAmount,
  getBalance,
}) => {
  return (
    <Popup
      position="center center"
      open={popupWithdraw}
      closeOnDocumentClick
      closeOnEscape
      onClose={() => {
        setPopupWithdraw(false);
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
        <p>Enter amount to Withdraw</p>
        <input
          type="number"
          value={withdrawAmount}
          onChange={(e) => {
            setWithdrawAmount(e.target.value);
          }}
        />
        <button
          onClick={() => {
            makeWithdraw(withdrawAmount).then(() => {
              console.log("Wihtdraw made");
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
          Withdraw
        </button>
      </div>
    </Popup>
  );
};
