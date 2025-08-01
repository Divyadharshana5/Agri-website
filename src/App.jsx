import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Language from "./components/Language/Language";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home", "language", "login"

  const handleExploreClick = () => {
    setCurrentPage("language");
  };

  const handleLanguageSelect = (language) => {
    console.log(`Selected language: ${language}`);
    setCurrentPage("login");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onExploreClick={handleExploreClick} />;
      case "language":
        return <Language onLanguageSelect={handleLanguageSelect} />;
      case "login":
        return <Login />;
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
