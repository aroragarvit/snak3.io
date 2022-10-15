import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import App from "./App";
import Expenses from "./routes/Expenses";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="expenses" element={<Expenses />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
