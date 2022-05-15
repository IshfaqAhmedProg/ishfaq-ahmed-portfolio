import React from 'react'

var theme,
  prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");
if (prefersDarkScheme.matches)
  theme = document.body.classList.contains("light-mode") ? "light" : "dark";
else theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
localStorage.setItem("theme", theme);

function ToggleFunction() {
  var currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark")
      document.body.classList.toggle("dark-mode");
  else if (currentTheme == "light")
      document.body.classList.toggle("light-mode");
}

export default ToggleFunction