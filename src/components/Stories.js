import React from "react";

import storyImgOne from "../img/story-1.jpeg";
import storyImgTwo from "../img/story-2.jpeg";



class Stories extends React.Component{
  render(){
    return (
      <React.Fragment>
        <div className="story__pictures">
            <img src={storyImgOne} alt="Couple with new house" class="story__img--1"/>
            <img src={storyImgTwo} alt="Couple with new house" class="story__img--2"/>
        </div>
    
        <div className="story__content">
            <h3 className="heading-3 mb-sm">Happy Customers</h3>
            <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
            <p className="story__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quas aliquid cumque laudantium, officiis harum dolores facilis sunt molestias deleniti.</p>
            <button className="btn">Find your own home</button>
        </div>
      </React.Fragment>
    );
  }
}



export default Stories;
