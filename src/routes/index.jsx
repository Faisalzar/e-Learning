import React from "react";

export default function index() {
  return (
    <div className="container"><br/><br/>
      <h1 className="title">Welcome to eLearning</h1>{" "}
      <h3 className="subtitle">Click on home or...</h3>
      <p>
        Check out my portfolio<br/>
        <a
          href="https://zariwalafaisal.wixsite.com/faisal"
          target={"_blank"}
          className="text-primary"
        >
          My Portfolio
        </a>
        
      </p>
    </div>
  );
}