import Navbar from "./components/Navbar";
import Vault from "./components/Vault";
import GameControl from "./components/GameControl";

import { useState, useEffect } from "react";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <Vault />
      <GameControl style={{}}></GameControl>
    </div>
  );
};

export default Home;
