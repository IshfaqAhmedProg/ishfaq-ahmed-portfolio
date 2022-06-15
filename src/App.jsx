import React, { useState, useEffect } from "react";
import "./App.scss";
import DevHelp from "./Pages/DevHelp/DevHelp";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} exact/>
     <Route path='/Gallery' element={<Gallery/>} exact/>
     <Route path='/DevHelp' element={<DevHelp/>} exact/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
