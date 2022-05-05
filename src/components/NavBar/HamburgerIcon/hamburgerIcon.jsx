import React from 'react'
import './hamburgerIcon.scss'
function toggleHamburger(){
  var hamburger = document.getElementById("Hamburger_icon");
  hamburger.classList.toggle("open");
  var menu=document.getElementById("Navbar_menu");
  if(menu.classList.contains("opened")){
    menu.classList.remove("opened");
  }
  else
  {
    menu.classList.add("opened");
  }
}
function HamburgerIcon() {
  return (
    <div id='Hamburger_icon' onClick={toggleHamburger}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default HamburgerIcon