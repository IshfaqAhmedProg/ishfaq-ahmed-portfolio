import React,{useState,useEffect} from "react";
import Navbar from "../../components/NavBar/navBar";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import CardCarousel from '../../components/CardCarousel/CardCarousel'
const Home = () => {
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
        <AboutMe></AboutMe>
        <CardCarousel />
      </section>
    </>
  );
};
export default Home;