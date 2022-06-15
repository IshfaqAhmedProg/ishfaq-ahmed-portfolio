import React from "react";
import "./Hero.scss";
import Images from "../../components/Images";
var landingpagebg = {};
function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <div className="hero-section-title">
          <h2>
            Hi! I am <span>Ishfaq Ahmed</span>
          </h2>
        </div>
        <div className="hero-section-carousel">
          <ul className="hero-section-carousel-flip">
            <li>Animator</li>
            <li>
              3D <span>Modeler</span>
            </li>
            <li>
              UI/UX <span>Designer</span>
            </li>
            <li>
              <span>Web</span> Developer
            </li>
            <li>
              <span>Mo-Graph</span> Designer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
