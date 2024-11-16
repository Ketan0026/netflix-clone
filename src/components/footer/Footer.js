import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="footer-wrapper">
      <div className="membership-container">
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="emailBox">
          <input placeholder="Email address" type="email" />
          <button onClick={handleLoginClick} className="get-started">
            Get Started <img src="/images/arrow.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer">
          <div className="footer-content contact">
            <p>
              <span>
                Questions? Call <a href="#">000-800-919-1694</a>
              </span>
            </p>
          </div>
          <div className="footer-content">
            <div className="links-container">
              <ul className="all-links">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Help Centre</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Media Centre</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Ways to Watch</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Speed Test</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
                <li>
                  <a href="#">Only on Netflix</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content">
            <div className="lang-btn">
              <img src="/images/english-icon.svg" alt="" /> English
            </div>
          </div>
          <div className="footer-content last-item">
            <p>Netflix India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
