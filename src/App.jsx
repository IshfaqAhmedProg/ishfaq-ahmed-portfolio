import React, { useState, useEffect } from "react";
import "./App.scss";
import DevHelp from "./pages/DevHelp/DevHelp";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
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
