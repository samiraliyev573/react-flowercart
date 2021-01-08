import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      
      <h1>Embrace The Journey</h1>
      <p>Flowers that blossom in less than 30 days</p>
      <p>Campaign Starting Very Soon</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Join for updates
        </Button>
        {/*<Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Join our list <i class="fas fa-envelope-square"/>
        </Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;
