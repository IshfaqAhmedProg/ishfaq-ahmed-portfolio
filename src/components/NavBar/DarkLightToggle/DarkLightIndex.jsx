import React from "react";
import DarktolightSVG from "./DarktoLightAnim/DarktolightSVG";
import LighttodarkSVG from "./LighttoDarkanim/LighttoDarkSVG";

function DarkLightSVG({SVGmode}) {
  switch (SVGmode) {
    case 'dark':
    return <DarktolightSVG></DarktolightSVG>;
    default:
    return <LighttodarkSVG></LighttodarkSVG>;

  }
}

export default DarkLightSVG;
