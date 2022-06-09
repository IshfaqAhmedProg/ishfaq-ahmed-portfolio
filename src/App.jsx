import React, { useState, useEffect } from "react";
import "./App.scss";
import VideoCard from "./components/VideoCard/videoCard";
import CardCarousel from "./components/CardCarousel/CardCarousel";
import Navbar from "./components/NavBar/navBar";
import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/Aboutme/AboutMe";
import DarkLightToggle from "./components/NavBar/DarkLightToggle/darkLightToggle";
function App() {
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      let lpHeight = document.getElementById("Landing_Page").offsetHeight;
      windowHeight > lpHeight ? setSticky("sticky") : setSticky("");
    }
  };
  return (
    <>
      {/* <DarkLightToggle/> */}
      <section id="Landing_Page">
        <Hero></Hero>
      </section>
      <section id="Navbar" className={sticky}>
        <Navbar></Navbar>
      </section>
      <section id="About_Me">
        <AboutMe></AboutMe>
        <CardCarousel/>
        <VideoCard></VideoCard>
      </section>
    </>
  );
}

export default App;
