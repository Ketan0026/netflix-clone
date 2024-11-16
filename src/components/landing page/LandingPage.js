import "./LandingPage.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div className="landing-page">
      <div className="bg-img">
        <div className="line"></div>
      </div>
      <div className="landing-data">
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Starts at ₹149. Cancel anytime.</p>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="input-field">
          <input placeholder="Email address" type="email" />
          <button className="get-started" onClick={handleLoginClick}>
            Get Started <img src="/images/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
