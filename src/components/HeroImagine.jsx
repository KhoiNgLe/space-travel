import React from "react";

import "./HeroImagine.css";
import Pricing from "./Pricing";

const HeroImagine = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        <Pricing/>
      </div>
    </div>
  );
};

export default HeroImagine;
