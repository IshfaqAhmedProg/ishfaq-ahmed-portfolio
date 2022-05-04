import React, { useState } from "react";
import "../NavBar/navBar.scss";
import Images from "../Images";
import DarkLightToggle from "./darkLightToggle";
function Navbar() {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={Images.iamlogo} alt="ishfaq ahmed logo"/>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-list-element">
            <a href="#AboutMe">About Me</a>
          </li>
          <li className="navbar-menu-list-element">
            <a href="#MyWorks">My Works</a>
          </li>
          <li className="navbar-menu-list-element">
            <a href="#Gallery">Gallery</a>
          </li>
          <li className="navbar-menu-list-element">
            <a href="#ContactMe">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="navbar-toggle">
        <DarkLightToggle/>
      <div className="navbar-hamburgur"></div>
      </div>
    </div>
  );
}

export default Navbar;
