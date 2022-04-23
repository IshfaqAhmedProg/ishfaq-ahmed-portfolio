import React, { useState } from "react";
import Slider from "react-slick";
import ToolsCard from "../ToolsCard/toolsCard";
import Images from "../Images";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";
import "./toolsCardCarousel.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

function ToolsCardCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    className: "toolsCardCarousel",
    draggable:false,
    centerMode: true,
    infinite:true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerMode:true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerMode:true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable:true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => {
      setActiveSlide(current);
    },
  };
  return (
    <div className="toolsCardCarousel-container">
      <div className="toolsCardCarousel-container-gradient">
        <div className="toolsCardCarousel-container-gradient-left">
          
        </div>
        <div className="toolsCardCarousel-container-gradient-right">

        </div>
      </div>
      <Slider {...settings}>
        <ToolsCard
          active={activeSlide == 0 ? "active" : ""}
          cardID="after-effects"
        ></ToolsCard>

        <ToolsCard
          active={activeSlide == 1 ? "active" : ""}
          cardID="photoshop"
        ></ToolsCard>

        <ToolsCard
          active={activeSlide == 2 ? "active" : ""}
          cardID="illustrator"
        ></ToolsCard>

        <ToolsCard
          active={activeSlide == 3 ? "active" : ""}
          cardID="zbrush"
        ></ToolsCard>

        <ToolsCard
          active={activeSlide == 4 ? "active" : ""}
          cardID="blender"
        ></ToolsCard>

        <ToolsCard
          active={activeSlide == 5 ? "active" : ""}
          cardID="adobe-xd"
        ></ToolsCard>

        <ToolsCard
          active={activeSlide == 6 ? "active" : ""}
          cardID="figma"
        ></ToolsCard>

        <ToolsCard
          active={activeSlide == 7 ? "active" : ""}
          cardID="vs-code"
        ></ToolsCard>
      </Slider>
    </div>
  );
}

export default ToolsCardCarousel;
