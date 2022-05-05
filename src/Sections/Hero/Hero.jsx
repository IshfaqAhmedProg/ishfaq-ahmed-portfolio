import React from "react";
import "./Hero.scss";
import Images from "../../components/Images";
var landingpagebg = {};
function Hero() {
  landingpagebg = {
    backgroundImage: "url(" + Images.landingpage + ")",
    backgroundSize: "cover",
  };
  return (
    <div className="hero-section" style={landingpagebg}>
      <div className="hero-section-container">
        <div className="hero-section-title">
          <h2>
            Hi! I am <span>Ishfaq Ahmed</span>
          </h2>
        </div>
        <div className="hero-section-carousel">
          <div className="hero-section-carousel-change_outer">
            <div className="hero-section-carousel-change_inner">
              <div className="hero-section-carousel-element">
                Motion <span>Graphics</span>
              </div>
              <div className="hero-section-carousel-element">
                <span>Web</span> Developer
              </div>
              <div className="hero-section-carousel-element">
                3D <span>Modeler</span>
              </div>
              <div className="hero-section-carousel-element">Animator</div>
              <div className="hero-section-carousel-element">Editor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
