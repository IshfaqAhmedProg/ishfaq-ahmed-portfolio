import React, { useState } from "react";
import Slider from "react-slick";
import ToolsCard from "../ToolsCard/toolsCard";
import Images from "../Images";

function ToolsCardCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    className: "ToolsCardCarousel",
    centerMode: true,
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll:3,
    speed: 500,
    arrows:true,
 /*    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear", */
    responsive:[
        {
            breakpoint:1919,
            settings:{
                slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
      {
        breakpoint: 1600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
            centerMode:false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <Slider {...settings}>
        <div>
        <ToolsCard
            active={activeSlide == 0 ? "active" : ""}
            cardID="after-effects"
            ></ToolsCard>
        </div>
        <div>
        <ToolsCard
            active={activeSlide == 1 ? "active" : ""}
            cardID="photoshop"
            ></ToolsCard>
        </div>
      <div>
          <ToolsCard
        active={activeSlide == 2 ? "active" : ""}
        cardID="illustrator"
        ></ToolsCard>
          </div>
      <div>
          <ToolsCard
        active={activeSlide == 3 ? "active" : ""}
        cardID="zbrush"
        ></ToolsCard>
          </div>
      <div>
          <ToolsCard
        active={activeSlide == 4 ? "active" : ""}
        cardID="blender"
        ></ToolsCard>
          </div>
      <div>
          <ToolsCard
        active={activeSlide == 5 ? "active" : ""}
        cardID="adobe-xd"
        ></ToolsCard>
          </div>
      <div>
          <ToolsCard
        active={activeSlide == 6 ? "active" : ""}
        cardID="figma"
        ></ToolsCard>
          </div>
      <div>
          <ToolsCard
        active={activeSlide == 7 ? "active" : ""}
        cardID="vs-code"
        ></ToolsCard>
          </div>
    </Slider>
  );
}

export default ToolsCardCarousel;
