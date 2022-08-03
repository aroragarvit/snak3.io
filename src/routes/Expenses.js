import { useState, useEffect } from "react";
import io from "socket.io-client";
const Expenses = () => {
  const [gameState1, setGameState1] = useState(false);

  const [joinerKeys, setJoinerKeys] = useState(null);
  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("secondConnectedToRoom", (data) => {
      // for self joiner
      console.log(`${data.socketId} joiner connected to room ${data.roomName}`); // game state of joiner it is
      setGameState(true);
    });

    socket.on("playerJoined", (data) => {
      // broadcast received to creater  after joiner joins
      console.log(`client Joinded ${data.socketId}`);
      const roomName = data.roomName;
      console.log(roomName);
      setGameState(true);
      setInterval(async function () {
        console.log(joinerKeys);
        await socket.emit("hello", { roomName: roomName, data: joinerKeys });
      }, 1000);
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

    socket.emit("playGame");
  }, []);

  document.addEventListener("keydown", (e) => {
    setJoinerKeys(e.key);
    console.log(joinerKeys);
  });

  return <div>{gameState ? <p> Loaded</p> : <p>loading</p>}</div>;
};
export default Expenses;
