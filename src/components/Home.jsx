import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__welcome">Welcome to Quiz Game!</div>
      <Link to="/questionone">
        <a className="home__startBtn">Start Your Game!</a>
      </Link>
    </div>
  );
}

export default Home;
