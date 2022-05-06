import { useState } from 'react'
import './App.scss'
import ToolsCard from './components/ToolsCard/toolsCard'
import VideoCard from './components/VideoCard/videoCard'
import ToolsCardCarousel from './components/CardCarousel/toolsCardCarousel'
import Navbar from './components/NavBar/navBar'
import Hero from './sections/Hero/Hero'
function App() {
  return (
    <>
      <div id='Landing_Page'>
        <Hero></Hero>
      </div>
      <div id="Navbar">
        <Navbar></Navbar>
      </div>
      <div id='About_Me'>
        <ToolsCardCarousel></ToolsCardCarousel>
      </div>
      {/* <VideoCard></VideoCard>
<ToolsCardCarousel></ToolsCardCarousel> */}
    </>
  )
}

export default App
