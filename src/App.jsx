import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Login />
    </div>
  );
}

export default App;
