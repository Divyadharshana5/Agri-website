import React from 'react';
import './Language.css'; // Assuming you have a CSS file for styling

const Language = ({ onSelect }) => {
  const languages = ['English', 'தமிழ்', 'हिन्दी', 'తెలుగు']; // add as needed

  return (
    <div className="language-container">
      <h2>Select Your Language</h2>
      <ul>
        {languages.map(lang => (
          <li key={lang}>
            <button onClick={() => onSelect(lang)}>{lang}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
