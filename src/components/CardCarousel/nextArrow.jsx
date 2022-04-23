import React from "react";
import Arrow from '../../assets/Icons/nextArrow.svg';


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex:3, display: "block",width:"9vw", maxWidth:"70px"}}
      onClick={onClick}
    >
      <img src={Arrow} alt="Next Tool" />
    </div>
  );
}

export default NextArrow;
