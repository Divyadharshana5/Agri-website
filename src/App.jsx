import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import Language from "./components/Language/Language";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Language />
    </div>
  );
}

export default App;
