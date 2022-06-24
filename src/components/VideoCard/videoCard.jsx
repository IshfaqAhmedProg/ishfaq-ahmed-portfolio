import React from "react";
import ListElement from "./ListElement";
import BGImages from "../Images";
import ResponsivePlayer from "../ReponsivePlayer/ResponsivePlayer";
import "./videoCard.scss";
function VideoCard({ cardTitle }) {
  return (
    <div className="videocard-container">
      <h3 className="videocard-container-title">{cardTitle}</h3>
      <div className="videocard-container-preview">
        <ResponsivePlayer></ResponsivePlayer>
      </div>
      <div className="videocard-container-list">
        <div className="videocard-container-list-shadowtop"></div>
        <ListElement
          name="item"
          time="16:00"
          source={BGImages.bg1}
          date="5/6/2020"
        />
        <ListElement
          name="item"
          time="16:00"
          source={BGImages.bg2}
          date="5/6/2020"
        />
        <ListElement
          name="item"
          time="16:00"
          source={BGImages.bg3}
          date="5/6/2020"
        />
        <ListElement
          name="item"
          time="16:00"
          source={BGImages.bg4}
          date="5/6/2020"
        />
        <div className="videocard-container-list-shadowtop"></div>
      </div>
    </div>
  );
}

export default VideoCard;
