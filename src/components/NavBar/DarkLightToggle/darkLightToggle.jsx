import React, { useState } from "react";
import DarkLightSVG from "./DarkLightIndex";
import './DarkLightToggle.scss';
function DarkLightToggle() {
  let darkMode = localStorage.getItem("darkMode");
  const [SVGmode, setSVGMode] = useState("");
  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
  };
  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
  };
  //check if dark mode is enabled
  const toggleMode = () => {
    if (darkMode !== "enabled") {
      // if disabled, turn ON
      enableDarkMode();
      setSVGMode("dark");
    } else {
      // if enabled, turn OFF
      disableDarkMode();
      setSVGMode("");
    }
  };
  return (
    <div className="darklight">
      <button
        onClick={toggleMode}
        className="dark-mode-toggle"
        id="dark-mode-toggle"
        aria-label="enable dark mode"
      >
        <DarkLightSVG SVGmode={SVGmode} />
      </button>
    </div>
  );
}

export default DarkLightToggle;
