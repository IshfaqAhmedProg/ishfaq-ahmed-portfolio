import React from "react";
import "./videoCard.scss";
function ListElement(props) {
  return (
    <div className="list-element">
      <div className="list-element-preview">
        <p className="list-element-preview-time">{props.time}</p>
        <img
          className="list-element-preview-image"
          src={props.source}
          alt=""
        />
      </div>
      <div className="list-element-desc">
        <div className="list-element-desc-title">
          <h4>{props.name}</h4>
        </div>
        <div className="list-element-desc-date">
          <h4>{props.date}</h4>
        </div>
      </div>
    </div>
  );
}

export default ListElement;
