import React from "react";
import Images from "../../../components/Images";
import "./AboutMe.scss";
import WorkedWith from "../WorkedWith/WorkedWith";
function AboutMe() {
  return (
    <div className="aboutme-section">
      <div className="aboutme-main">
      <div data-aos="zoom-out-right" className="aboutme-profile">
        <img src={Images.selfpotrait} alt="ishfaq ahmed potrait" />
      </div>
        <div data-aos="fade-left" className="aboutme-title">
          <h1>
            About <span>Me</span>
          </h1>
        </div>
        <div data-aos="fade-up"  className="aboutme-details">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            optio a totam sunt placeat ipsam praesentium hic labore quos
            commodi, blanditiis, asperiores natus aliquam id culpa sapiente
            mollitia voluptate temporibus inventore nihil in? Odit quod
            deleniti, sint, quaerat recusandae esse voluptatem unde incidunt
            nemo dolore officia delectus vero nisi ipsum.
          </p>
        </div>
      </div>
      <WorkedWith></WorkedWith>
    </div>
  );
}

export default AboutMe;
