import React from "react";
import "./QaBox.css";

function QaBox({ title, content, content_pt2, isOpen, onItemClick }) {
  return (
    <div className={`qa-box ${isOpen ? "open" : ""}`} onClick={onItemClick}>
      <div className="question-box">
        <h3>{title}</h3>
        <span className={`large-cross ${isOpen ? "opened" : ""}`}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Plus"
            alt=""
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span className="small-cross">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Plus"
            alt=""
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
      <div className={`answer-box ${isOpen ? "ans-open" : ""}`}>
          <p>{content}</p>
          {content_pt2 && (
            <>
              <br />
              <p>{content_pt2}</p>
            </>
          )}
        </div>
    </div>
    
  );
}

export default QaBox;