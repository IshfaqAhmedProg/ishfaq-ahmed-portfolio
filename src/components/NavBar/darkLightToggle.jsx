import React from "react";
import "./darkLightToggle.scss";
import ToggleFunction from "./ToggleFunction";

function DarkLightToggle() {
  return (
    <div>
      <label className="switch">
        <input id='DLtoggle' type="checkbox" onChange={ToggleFunction}></input>
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default DarkLightToggle;
