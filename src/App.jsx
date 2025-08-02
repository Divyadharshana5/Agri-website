import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Language from "./components/Language/Language";

import "./App.css";
import HubReg from "./components/Hub-reg/Hub-reg";
import Register from "./components/Register/Register";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home", "language", "login"

  const handleExploreClick = () => {
    setCurrentPage("language");
  };

  const handleLanguageSelect = (language) => {
    setCurrentPage("login");
  };

  const handleLoginClick = () => {
    setCurrentPage("login");
  };


  const handleRegisterClick = () => {
    setCurrentPage("register");
  };

  const handleHubRegistrationClick = () => {
 setCurrentPage("hubReg");
  };

  const handleBackToLogin = () => {
    setCurrentPage("login");
  };


  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onExploreClick={handleExploreClick} />;
      case "language":
        return <Language onLanguageSelect={handleLanguageSelect} />;
      case "login":
        return <Login onRegisterClick={handleRegisterClick} OnSubmitClick={handleExploreClick} onHubRegistrationClick={handleHubRegistrationClick} />;
      case "register":
        return <Register onBackToLogin={handleBackToLogin} />;
      case "hubReg":
 return <HubReg onBackToLogin={handleBackToLogin} />;
      case "welcome": // Placeholder for the Welcome page
        return <Home onExploreClick={handleExploreClick} />; // Temporarily navigating to home
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
