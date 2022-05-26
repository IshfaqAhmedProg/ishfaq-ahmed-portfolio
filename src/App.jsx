import React, { useState, useEffect } from "react";
import "./App.scss";
import ToolsCard from "./components/ToolsCard/toolsCard";
import VideoCard from "./components/VideoCard/videoCard";
import ToolsCardCarousel from "./components/CardCarousel/toolsCardCarousel";
import Navbar from "./components/NavBar/navBar";
import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/Aboutme/AboutMe";
function App() {
  const [sticky, setSticky] = useState('');
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  },[]);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      let lpHeight=document.getElementById('Landing_Page').offsetHeight;
      windowHeight > lpHeight ? setSticky('sticky') : setSticky('');
    }
  };
  return (
    <>
      <section id="Landing_Page">
        <Hero></Hero>
      </section>
      <section id="Navbar" className={sticky}>
        <Navbar></Navbar>
      </section>
      <section id="About_Me">
        <AboutMe></AboutMe>
       <ToolsCardCarousel/>
      </section>
    </>
  );
}

export default App;
