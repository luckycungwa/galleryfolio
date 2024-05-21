import React from "react";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <div>
            <h4 className="hero-tag">
              44Tag Studi<span className="mark-orange">o</span>s
            </h4>
          </div>
          <div>
            <p className="hero-info">
              Our primary mission is to provide the best graphic design services that of quality and explore creative areas that are {" "}
            </p>
            {/* This will be animated to different texts */}
            <p className="hero-heading">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Effective",
                  2000,
                  "Minimal",
                  2000,
                  "Unique",
                  2000,
                  "Vibrant",
                  2000,
                ]}
                wrapper="span"
                speed={8}
                style={{display: 'inline-block' }}
                repeat={Infinity}
              />
            </p>
          </div>

          <div className="hero-info">
            {/* <p className="">
              Our mission is to make a meaningful impact in graphic design
              sector by helping small businesses and individuals to establish or
              elevate their visual brands.
            </p>
            <p className="">
              Our comprehensive approach is to provide graphic design related
              services.
            </p> */}
          </div>

          <div>
            <p className="hero-info">by Lucky Cungwa</p>
            <p className="hero-info2"> &copy; 44Tag STudios - All Rights Reserved | 2024</p>
          </div>
        </div>
        <div className="image-section">
          <img src="./hero-image.png" className="hero-image" alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
