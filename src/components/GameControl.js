import { useState, useEffect } from "react";
const GameControl = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
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
        class="btn"
        role="button"
        onClick={() => {}}
      >
        Create New Game
      </div>
      <p style={{ margin: "auto", fontSize: "1rem" }}> OR</p>
      <input
        style={{
          marginTop: "5px",
          border: "3px solid black",
          borderRadius: "3px",
          height: "25px",
          width: "250px",
          textAlign: "center",
        }}
        type="text"
        placeholder="Enter Game Code"
        id="gameCodeInput"
      ></input>
      <div
        style={{
          height: "40px",
          padding: "3px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#CDF5F6",
          alignItems: "center",
          marginTop: "10px",
          fontSize: "1.5rem",
          border: "3px solid black",
          width: "180px",
        }}
        class="btn"
        role="button"
        onClick={() => {}}
      >
        Join Game
      </div>
    </div>
  );
};
export default GameControl;
