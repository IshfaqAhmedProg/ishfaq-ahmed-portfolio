import React from "react";
import "../VideoCard/videoCardListElement.scss";

function VideoCardListElement(props) {
  return (
    <div className="listelement">
      <div className="listelement-preview">
        <div className="listelement-preview-time">
          <p>{props.time}</p>
        </div>
        <img className="listelement-preview-image" src={props.source} alt="" />
      </div>
      <div className="listelement-desc">
        <div className="listelement-desc-title">
          <h3>{props.name}</h3>
        </div>
        <div className="listelement-desc-date">
          <h3>{props.date}</h3>
        </div>
      </div>
    </div>
  );
}

export default VideoCardListElement;
