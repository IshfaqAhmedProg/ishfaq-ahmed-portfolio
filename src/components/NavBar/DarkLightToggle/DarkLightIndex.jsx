import React from "react";
import DarktolightSVG from "./DarktoLightAnim/DarktolightSVG";
import LighttodarkSVG from "./LighttoDarkanim/LighttoDarkSVG";

function DarkLightSVG(props) {
  if (props.SVGmode == "dark") {
    return <DarktolightSVG></DarktolightSVG>;
  } else{
    return <LighttodarkSVG></LighttodarkSVG>;
  }
}

export default DarkLightSVG;
