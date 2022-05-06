import React from "react";
import "./darkLightToggle.scss";
import ToggleFunction from "./ToggleFunction";

function DarkLightToggle() {
  return (
    <div>
      <label className="switch">
        <input id="DLtoggle" type="checkbox" onChange={ToggleFunction}></input>
        <span className="slider"></span>
        <span className="control"></span>

        <span className="moon-blue"></span>
        
        <span className="white-circle"></span>

        <span className="sun-spoke"></span>
        <span className="sun-spoke"></span>
        <span className="sun-spoke"></span>
        <span className="sun-spoke"></span>
        <span className="sun-spoke"></span>
        <span className="sun-spoke"></span>
        <span className="sun-spoke"></span>
        <span className="sun-spoke"></span>
      </label>
    </div>
  );
}

export default DarkLightToggle;
