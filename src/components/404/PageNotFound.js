import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="errorpage">
      <img src="/images/no-results.png" alt="" />
      <button onClick={()=>navigate("/home")}>Go to Home</button>
    </div>
  );
}

export default PageNotFound;
