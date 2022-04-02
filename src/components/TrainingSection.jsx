import React from "react";
import "./TrainingSection.css";
import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          The mission specific training typically requires 18 months to complete
          for Space Shuttle and International Space Station crews. It is
          important to ensure the astronauts' well-being, physical and mental
          health prior, during, and after the mission period
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="imagine-stack top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="imagine-stack bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
