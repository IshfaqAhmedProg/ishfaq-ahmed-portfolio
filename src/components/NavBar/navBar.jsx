import React, { useState, useEffect } from "react";
import "../NavBar/navBar.scss";
import Images from "../Images";
import HamburgerIcon from "./HamburgerIcon/hamburgerIcon";
import DarkLightToggle from "./DarkLightToggle/DarkLightToggle";
import { Link } from "react-router-dom";
import Gallery from "../../pages/Gallery/Gallery";
import Home from "../../pages/Home/Home";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to='/'>
          <img src={Images.iamlogo} alt="ishfaq ahmed logo" />
        </Link>
      </div>
      <div className="navbar-menu" id="Navbar_menu">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-list-element">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-menu-list-element">
            <a href="#AboutMe">About Me</a>
          </li>
          <li className="navbar-menu-list-element">
            <a href="#MyWorks">My Works</a>
          </li>
          <li className="navbar-menu-list-element">
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li className="navbar-menu-list-element">
            <a href="#Footer">Contact Me</a>
          </li>
        </ul>
      </div>

      <div className="navbar-toggle">
        {/* Add dark-light toggle here */}
        <DarkLightToggle />
      </div>
      <div className="navbar-hamburger">
        <HamburgerIcon />
      </div>
    </div>
  );
}

export default Navbar;
