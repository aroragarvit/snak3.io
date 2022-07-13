import { FiSend } from "react-icons/fi";

const Vault = () => {
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
      }}
    >
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
          onClick={() => {}}
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
        <p style={{}}>Value</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "181.6px",
        }}
      >
        <button
          style={{
            width: "100%",
            fontSize: "1.5rem",
            borderRadius: "0px 0px 0px 8px",
          }}
        >
          Deposit
        </button>
        <button
          style={{
            width: "100%",
            fontSize: "1.5rem",
            borderRadius: "0px 0px 8px 0px",
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};
export default Vault;
