import React from "react";
import "./HomeFooter.css";

function HomeFooter() {
  return (
    <div className="member-footer">
      <div className="social-links">
        <a
          className="social-link"
          target="_blank"
          href="https://www.facebook.com/"
        >
          <img src="/images/facebook.svg" alt="" />
        </a>
        <a
          className="social-link"
          target="_blank"
          href="https://www.instagram.com/"
        >
          <img src="/images/instagram.svg" alt="" />
        </a>
        <a
          className="social-link"
          target="_blank"
          href="https://www.youtube.com/"
        >
          <img src="/images/youtube.svg" alt="" />
        </a>
        <a
          className="social-link"
          target="_blank"
          href="https://www.linkedin.com/in/ketan-kaniz"
        >
            <img src="/images/linkedin.svg" alt="" />
        </a>
      </div>
      <ul className="member-footer-links">
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Audio Description</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Help Centre</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Gift Cards</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Media Centre</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Investor Relations</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Jobs</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Terms of Use</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Privacy</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Legal Notices</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Cookie Preferences</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Corporate Information</span></a></li>
        <li className="member-footer-link-wrapper"><a className="member-footer-link" href="#"><span >Contact Us</span></a></li>
      </ul>
      <div className="member-footer-service">
        <button className="sercice-code">Service Code</button>
      </div>
      <div className="member-footer-copyright">

      <span>© 1997-2024 Netflix, Inc. </span>
      </div>
    </div>
  );
}

export default HomeFooter;
