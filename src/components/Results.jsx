import React from "react";
import { Link } from "react-router-dom";
import "../styles/Results.css";

function Results() {
  return (
    <div className="results">
      <div className="results__title">Results:</div>
      <div className="results__answers">
        You answered !!! out of 3 questions correctly. Congratulations!
      </div>
      <Link to="/">
        <div className="results__homePage">Return to Homepage</div>
      </Link>
    </div>
  );
}

export default Results;
