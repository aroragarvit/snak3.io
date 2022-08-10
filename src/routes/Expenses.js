import { useState, useEffect } from "react";
import Board from "../components/Board";
import io from "socket.io-client";

const Expenses = () => {
  const [gameState, setGameState] = useState(false);
  const [joinerKeys, setJoinerKeys] = useState(null);
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.emit("playGame");

    socket.on("secondConnectedToRoom", (data) => {
      // for self joiner
      console.log(`${data.socketId} joiner connected to room ${data.roomName}`); // game state of joiner it is
      setGameState(true);
    });

    socket.on("playerJoined", async (data) => {
      // broadcast received to creater  after joiner joins
      console.log(`client Joinded ${data.socketId}`);
      const roomName = data.roomName;
      console.log(roomName);
      setGameState(true);

      await socket.emit("hello", { roomName: roomName, data: number });

      //   setInterval(async function () {
      //     console.log(joinerKeys);
      //     await socket.emit("hello", { roomName: roomName, data: joinerKeys });
      //   }, 1000);
    });
    socket.on("connectToRoom", (data) => {
      // for self creater
      console.log(
        `${data.socketId} creater connected to room ${data.roomName}`
      );
    });
    socket.on("playerLeft", (data) => {
      console.log(`${data.socketId} left room ${data.roomName}`); // broadcast receive by creater
      setGameState(false);
      socket.disconnect();
    });

    socket.on("disconnected", (data) => {
      console.log(`${data.socketId} disconnected from room ${data.roomName}`); // emit
    });

    socket.on("handleByJoiner", (data) => {
      console.log(data);
    });
  }, []);

  document.addEventListener("keydown", (e) => {
    setJoinerKeys(e.key);
  });

  return (
    <div>
      {gameState ? (
        <div>
          <p> Loaded</p>
          <div>
            <button
              onClick={() => {
                setNumber(
                  Math.floor(Math.random() * 10) + //send data
                    1
                );
              }}
            >
              Generate
            </button>
          </div>
          <p>{number}</p>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};
export default Expenses;
