import React, { useState } from "react";
import ReactPlayer from "react-player";
import PlayerControls from "./PlayerControls";
import PlayerControlSVG from "./PlayerControlSVG";
import "./ResponsivePlayer.scss";
function ResponsivePlayer() {
  return (
    <div className="player-wrapper">
     {/* <PlayerControls/> */}
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=cjamHzRPXFo"
        config={{ vimeo: { playerOptions: { background: true } } }}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default ResponsivePlayer;
