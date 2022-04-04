import React from "react";
import {HashRouter as Router,Routes, Route, Link } from "react-router-dom";
import './Base.scss';
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";


class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Router>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
          <Footer/>
        </Router>
          
          
          
      </React.Fragment>
    );
  }
}



export default App;
