import React from "react";
import "./Register.css";
import logo from "../../../public/logo.png"; // Adjust path if needed

const Register = () => {
  return (
    <div className="register-bg">
      <div className="glass-card">
        <img src={logo} alt="Logo" className="logo" />
                <h1 className="title">Register</h1>
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
        
                  <button type="submit" className="login-submit">
                    Submit
                  </button>
                </form>
      </div>
      </div>
  )
};
export default Register;