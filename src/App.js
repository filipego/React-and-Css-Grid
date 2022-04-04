import React from "react";

import './Base.scss';
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Realtors from "./components/Realtors"
import Features from "./components/Features"
import Stories from "./components/Stories"
import Homes from "./components/Homes"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"


function App() {
  return (
    <React.Fragment>
        <Sidebar/>
        <Header/>
        <Realtors/>
        <Features/>
        <Stories/>
        <Homes/>
        <Gallery/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;

