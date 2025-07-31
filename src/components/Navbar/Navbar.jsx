import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="site-title"></h1>
      </div>
    
    </nav>
  );
};

export default Navbar;
