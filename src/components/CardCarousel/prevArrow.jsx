import React from "react";
import './arrow.scss';
import Arrow from '../../assets/Icons/prevArrow.svg'

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width:"9vw", maxWidth:"70px"}}
      onClick={onClick}
    >
      <img src={Arrow} alt="Previous Tool"/>
    </div>
  );
}

export default PrevArrow;