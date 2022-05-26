import React from 'react'

var theme,
  prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches)
  theme = document.body.classList.contains("light-mode") ? "dark" : "light";
else theme = document.body.classList.contains("dark-mode") ? "light" : "dark";
localStorage.setItem("theme", theme);

function ToggleFunction() {
  var currentTheme = localStorage.getItem("theme");
  var toggleL2D= document.getElementById('darklightsvg')
  if (currentTheme == "dark"){
    document.body.classList.toggle("light-mode");
  }
  else if (currentTheme == "light"){
    document.body.classList.toggle("dark-mode");
  }
  if(!toggleL2D.classList.contains('light-dark')){
    toggleL2D.classList.add("light-dark");
    toggleL2D.classList.remove("dark-light");
  }
  else
  {
    toggleL2D.classList.remove("light-dark");
    toggleL2D.classList.add("dark-light");
  }
}

export default ToggleFunction