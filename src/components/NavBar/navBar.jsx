import React, { useState, useEffect } from "react";
import "../NavBar/navBar.scss";
import Images from "../Images";
import HamburgerIcon from "./HamburgerIcon/hamburgerIcon";
import DarkLightToggle from "./DarkLightToggle/DarkLightToggle";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={Images.iamlogo} alt="ishfaq ahmed logo" />
      </div>
      <div className="navbar-menu" id="Navbar_menu">
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
      {/* Add dark-light toggle here */}
      <DarkLightToggle/>
      </div>
      <div className="navbar-hamburger">
        <HamburgerIcon />
      </div>
    </div>
  );
}

export default Navbar;
