import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
function App() {
  const [connected, setConnected] = useState(true);
  const [message, setMessage] = useState("");
  return (
    <div className="App">
      <div className="content">
        <Navbar
          connected={connected}
          setConnected={setConnected}
          message={message}
          setMessage={setMessage}
        />
        {connected && <Home></Home>}
      </div>
    </div>
  );
}

export default App;
