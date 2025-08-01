import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app-container">
      <Navbar />
      {!showLogin ? (
        <Home onExploreClick={() => setShowLogin(true)} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
