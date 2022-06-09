import React from "react";
import Images from "../../components/Images";
import "../Aboutme/AboutMe.scss";
import WorkedWith from "./Workedwith/WorkedWith";
function AboutMe() {
  return (
    <div className="aboutme-section">
      <div className="aboutme-main">
      <div className="aboutme-profile">
        <img src={Images.selfpotrait} alt="ishfaq ahmed potrait" />
      </div>
        <div className="aboutme-title">
          <h1>
            About <span>Me</span>
          </h1>
        </div>
        <div className="aboutme-details">
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
