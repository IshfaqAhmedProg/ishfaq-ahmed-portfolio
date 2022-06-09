import React, { useState } from "react";
import Slider from "react-slick";
import ToolsCard from "../ToolsCard/toolsCard";
import Images from "../Images";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";
import "./CardCarousel.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

function CardCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    className: "CardCarousel",
    draggable: false,
    centerMode: true,
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
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
  const cardIDs = [
    "aftereffects",
    "photoshop",
    "illustrator",
    "zbrush",
    "blender",
    "adobexd",
    "figma",
    "vscode",
  ];
  return (
    <div className="CardCarousel-container">
      <div className="CardCarousel-container-title">
        <h1>Tools</h1>
      </div>
      <div className="CardCarousel-container-gradient">
        <span className="CardCarousel-container-gradient-left"></span>
        <span className="CardCarousel-container-gradient-right"></span>
      </div>
      <Slider {...settings}>
        {cardIDs.map(function (card, id) {
          return (
            <ToolsCard
              active={activeSlide == id ? "active" : ""}
              cardID={card}
              key={id}
            ></ToolsCard>
          );
        })}
      </Slider>
    </div>
  );
}

export default CardCarousel;
