import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Language from "./components/Language/Language";

import "./App.css";
import Register from "./components/Register/Register";

function App() {
  const [currentPage, setCurrentPage] = useState("login"); // "home", "language", "login"

  const handleExploreClick = () => {
    setCurrentPage("home");
  };

  const handleLanguageSelect = (language) => {
    setCurrentPage("language");
  };


  const handleRegisterClick = () => {
    setCurrentPage("register");
  };


  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onExploreClick={handleExploreClick} />;
      case "language":
        return <Language onLanguageSelect={handleLanguageSelect} />;
      case "login":
        return <Login onRegisterClick={handleRegisterClick} />;
      case "register":
        return <Register  />;
      default:
        return <Home onExploreClick={handleExploreClick} />;
    }
  };

  return (
    <div className="app-container">

      <Navbar />
      {renderCurrentPage()}
      
    </div>
  );
}

export default App;
