import React from "react";
import "./Register.css";
import logo from "../../../public/logo.png"; // Adjust path if needed

const Register = () => {
  return (
    <div className="register-bg">
      <div className="glass-card">
        <img src={logo} alt="Logo" className="logo" />
                <h1 className="title">Register</h1>
                <form className="form">
                  <label htmlFor="username" className="label">
                    Username:
                  </label>
                  <input type="text" id="username" className="input" />
        
                  <label htmlFor="email" className="label">
                    Email:
                  </label>
                  <input type="email" id="email" className="input" />

                   <label htmlFor="phone" className="label">
                    Phone No:
                  </label>
                  <input type="number" id="phone" className="input" />

                   <label htmlFor="password" className="label">
                    Password:
                  </label>
                  <input type="password" id="password" className="input" />

                   <label htmlFor="confirm password" className="label">
                    Confirm Password:
                  </label>
                  <input type="password" id="confirm password" className="input" />

                    <button type="submit" className="button">Register</button>
                </form>
      </div>
      </div>
  )
};
export default Register;