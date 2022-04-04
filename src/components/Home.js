import React from 'react'

import Header from "./Header";
import Realtors from "./Realtors";
import Features from "./Features";
import Stories from "./Stories";
import Homes from "./Homes";
import Gallery from "./Gallery";


function Home() {
  return (
    <React.Fragment>
        <Header/>
        <Realtors/>
        <Features/>
        <Stories/>
        <Homes/>
        <Gallery/>
    </React.Fragment>
  );
}

export default Home;

