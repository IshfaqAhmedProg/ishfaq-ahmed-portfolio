import React from "react";
import "../NavBar/navBar.scss";
import Images from "../Images";
import DarkLightToggle from "./darkLightToggle";
import HamburgerIcon from "./HamburgerIcon/hamburgerIcon";

function Navbar() {
  return (
    <div className="navbar-container" id="Navbar">
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
        <DarkLightToggle />
      </div>
      <div className="navbar-hamburger">
        <HamburgerIcon />
      </div>
    </div>
  );
}

export default Navbar;
