import React,{useState,useEffect} from "react";
import Navbar from "../../components/NavBar/navBar";
import AboutMe from './AboutMe'
import Hero from './Hero'
import CardCarousel from '../../components/CardCarousel/CardCarousel'
import VideoCard from "../../components/VideoCard/videoCard";
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
        <VideoCard></VideoCard>
      </section>
    </>
  );
};

export default Home;
