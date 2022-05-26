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
          <div className="hero-section-carousel-change-outer">
            <div className="hero-section-carousel-change-inner">
              <div className="hero-section-carousel-element" style={{"--order":1}}>
                Motion <span>Graphics</span>
              </div>
              <div className="hero-section-carousel-element" style={{"--order":2}}>
                <span>Web</span> Developer
              </div>
              <div className="hero-section-carousel-element" style={{"--order":3}}>
                3D <span>Modeler</span>
              </div>
              <div className="hero-section-carousel-element" style={{"--order":4}}>Animator</div>
              <div className="hero-section-carousel-element" style={{"--order":5}}>Editor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
