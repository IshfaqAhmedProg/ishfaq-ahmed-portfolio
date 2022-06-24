import React, { useState, useEffect } from "react";
import Navbar from "../../components/NavBar/navBar";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import MyWorks from "./MyWorks/MyWorks";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();
  }, []);
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
      <section id="Landing_Page">
        <Hero></Hero>
      </section>
      <section id="Navbar" className={sticky}>
        <Navbar></Navbar>
      </section>
      <section id="AboutMe">
        <AboutMe />
        <MyWorks />
        <CardCarousel />
      </section>
    </>
  );
};
export default Home;
