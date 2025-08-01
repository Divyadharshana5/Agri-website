import React from "react";
import "./Hub-reg.css";
import logo from "../../../public/logo.png"; // Adjust path if needed

const HubReg = () => {
  return (
    <div className="bg">
      <div className="glass-card">
        <img src={logo} alt="Logo" className="logo" />
                <h1 className="title">Register</h1>
                <form className="form">
                  
                  <label htmlFor="branch-id" className="label">
                    Branch ID:
                  </label>
                  <input type="text" id="branch-id" className="input" />

                   <label htmlFor="hub-name" className="label">
                    Hub Name:
                  </label>
                  <input type="text" id="hub-name" className="input" />

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
export default HubReg;