import "./Navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleAuth = () => {
    navigate("/login");
  };
  return (
    <div className="nav-container">
      <div className="logo-section">
        <img src="/images/logo.svg" alt="" />
        {/* <h2>NETFLIX</h2> */}
      </div>
      <span className="btn-section">
        <div className="lang-btn">
          <img src="/images/english-icon.svg" alt="" /> English
        </div>
        <button onClick={handleAuth} className="login-btn">
          Sign In
        </button>
      </span>
    </div>
  );
}

export default Navbar;
