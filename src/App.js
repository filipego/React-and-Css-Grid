import React from "react";
import './Base.scss';
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Realtors from "./components/Realtors"
import Features from "./components/Features"


class App extends React.Component{
  render(){
    return (
      <React.Fragment>
          <Sidebar/>
          <Header/>
          <Realtors/>
          <Features/>
      </React.Fragment>
    );
  }
}



export default App;
