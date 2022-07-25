import { useState, useEffect } from "react";
import io from "socket.io-client";
import { Link } from "react-router-dom";

const GameControl = () => {
  const [socket, setSocket] = useState(null);
  const [gameState, setGameState] = useState(0);
  useEffect(() => {
    const socket = io("http://localhost:3001");
    setSocket(socket);

    socket.on("secondConnectedToRoom", (data) => {
      console.log(`${data.socketId} connected to room ${data.roomName}`);
      setGameState(1);
    });

    socket.on("playerJoined", (data) => {
      console.log("client Joinded", data);
    });
    socket.on("connectToRoom", (data) => {
      console.log(`${data.socketId} connected to room ${data.roomName}`);
    });
    socket.on("playerLeft", (data) => {
      console.log(`${data.socketId} left room ${data.roomName}`);
    });
  }, []);

  function playGame() {
    socket.emit("playGame");
  }
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
          onClick={() => {
            playGame();
          }}
        >
          PLAY
        </button>
      </Link>
      {/* <p style={{ margin: "auto", fontSize: "1rem" }}> OR</p>
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
      </div>*/}
    </div>
  );
};
export default GameControl;
