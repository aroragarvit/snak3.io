import { Link } from "react-router-dom";

const GameControl = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/expenses">
        <button
          style={{
            height: "40px",
            backgroundColor: "#CDF5F6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5px",
            padding: "3px",
            fontSize: "1.5rem",
            border: "3px solid black",
            width: "230px",
          }}
        >
          PLAY
        </button>
      </Link>
    </div>
  );
};
export default GameControl;
