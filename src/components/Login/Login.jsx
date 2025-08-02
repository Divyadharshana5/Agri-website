import React from "react";
import "./Login.css";
import logo from "../../../public/logo.png"; // Adjust path if needed
import Link from "next/link";

const Login = ({ onRegisterClick, OnSubmitClick }) => {
  return (
    <div className="login-bg">
      <div className="glass-card">
        <img src={logo} alt="Logo" className="login-logo" />
        <h1 className="login-title">Login</h1>
        <form className="login-form">
          <label htmlFor="username" className="login-label">
            Username:
          </label>
          <input type="text" id="username" className="login-input" />

          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input type="password" id="password" className="login-input" />

          <div className="login-links">
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button onClick={OnSubmitClick} type="submit" className="login-submit">
            Submit
          </button>
        </form>
        <div className="register-section">
          <span className="new-user-text">New user?</span>
          <button className="register-btn" onClick={onRegisterClick}>Register</button>
        </div>
        <a href="#" className="hub-link">
          <button className="hub-button">
          For Hub
          </button>
        </a>
        </div>
    </div>
  );
};

export default Login;
