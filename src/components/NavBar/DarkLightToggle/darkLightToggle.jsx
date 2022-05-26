import React from "react";
import "./darkLightToggle.scss";
import ToggleFunction from "./ToggleFunction";
import Darktolightanim from './darktolightsvg'
import dtl from './darktolight2.svg'

function DarkLightToggle() {
  return (
    <div>
      <label className="switch">
        <input id="DLtoggle" type="checkbox" onChange={ToggleFunction}></input>
        <span className="slider"></span>
        <span className="control">
          <Darktolightanim/>
        </span>
      </label>
    </div>
  );
}

export default DarkLightToggle;
