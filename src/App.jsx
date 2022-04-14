import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import ToolsCard from './components/ToolsCard/toolsCard'
import VideoCard from './components/VideoCard/videoCard'
import ToolsCardCarousel from './components/CardCarousel/toolsCardCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='toot'>
      <ToolsCard cardID='after-effects'/>
      <ToolsCard cardID='blender'/>
      </div>
      <ToolsCardCarousel></ToolsCardCarousel>
    </div>
  )
}

export default App
