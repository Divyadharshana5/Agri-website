import React, { useState } from "react";
import "./Language.css";

const Language = ({ onLanguageSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    "English",
    "Tamil",
    "Telugu",
    "Malayalam",
    "Hindi",
    "Bengali",
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    if (onLanguageSelect) {
      onLanguageSelect(language);
    }
  };

  return (
    <div className="language-container">
      <div className="language-dropdown">
        <div className="language-header" onClick={() => setIsOpen(!isOpen)}>
          <span>Select your language</span>
          <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
        </div>

        {isOpen && (
          <div className="language-options">
            {languages.map((language, index) => (
              <div key={language}>
                <div
                  className={`language-option ${
                    selectedLanguage === language ? "selected" : ""
                  }`}
                  onClick={() => handleLanguageSelect(language)}
                >
                  {language}
                </div>
                {index < languages.length - 1 && (
                  <div className="separator"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Language;
