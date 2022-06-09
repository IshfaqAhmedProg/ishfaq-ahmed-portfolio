import React, { useState } from "react";
import PlayerControlSVG from "./PlayerControlSVG";
function PlayerControls() {
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  return (
    <div className="player-controls">
      <label className="player-controls-play invis-toggle">
        <input type="checkbox" onChange={(e) => setPlay(play ? false : true)} />
        <span>
          <PlayerControlSVG name={play ? "play" : "pause"} />
        </span>
      </label>
      <div className="player-controls-bar">
        <label className="player-controls-bar-play invis-toggle">
          <input
            type="checkbox"
            onChange={(e) => setPlay(play ? false : true)}
          />
          <span>
            <PlayerControlSVG name={play ? "play" : "pause"} />
          </span>
        </label>
        <progress className="progressbar" value=".1"></progress>
        <label className="player-controls-bar-volume invis-toggle">
          <input
            type="checkbox"
            onChange={(e) => setMute(mute ? false : true)}
          />
          <span>
        <PlayerControlSVG name={mute ? "mute" : "volume"} />
          </span>
        </label>
        <input type="range" className="volumebar"></input>
      </div>
    </div>
  );
}

export default PlayerControls;
