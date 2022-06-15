import React,{ createContext } from 'react'

const Video=createContext();
const VideoContext = ({children}) => {

  return <Video.Provider value={''}>{children}</Video.Provider>;
}

export default VideoContext;