import React from "react";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import "../App.css";

const Home = () => {
  

  return (
    <div className="scroll-container" >
      <Hero />
      <div className="scroll-content">
        <Gallery />
      </div>
      <div className="gallery">
        <hr className="MuiDivider-root" />
        <h1 className="gallery-title">You have reached the End.</h1>
        <p className="hero-info">Thanks for watching!</p>
      </div>
      <hr className="MuiDivider-root" />
    </div>
  );
};

export default Home;
