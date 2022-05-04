import React from 'react';
import './Hero.scss'
import Images from '../../components/Images';
var landingpagebg={};
function Hero() {
 landingpagebg={
    backgroundImage: "url(" +Images.landingpage+ ")",
    backgroundSize:"cover"
  };
  return (
    <div className='hero-section' style={landingpagebg}>
      <div className='hero-section-container'>
        <div className="hero-section-title">
            <h2>Hi! I am <span>Ishfaq Ahmed</span></h2>
        </div>
        <div className="hero-section-scrolling">
          <div className="hero-section-scroller">
            <h1 className="hero-section-scrolling-text">
              Graphic Designer
            </h1>
            <h1 className="hero-section-scrolling-text">
              Animator
            </h1>
            <h1 className="hero-section-scrolling-text">
              UI/UX Designer
            </h1>
            <h1 className="hero-section-scrolling-text">
              Web Developer
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero