import React from "react";
import Img2 from "./../../../assets/desc2.png"
import "./AboutDesc2.css"

function AboutDesc2() {
  return (
    <div className="aboutDesc2">
      <div className="text">
        <h3>Our Recipes</h3>
        <p>
          Our fresh ingredients are delivered early every morning to our
          restaurants. We prepare our sweet and salted snacks in our kitchens
          throughout the day and we sell them when they are freshest (and most
          delicious!)
          <br />
          <br />
          Every day, our unsold items are collected by our charity van, to be
          redistributed to those who need it most.{" "}
        </p>
      </div>
      <img src={Img2} alt="" className="imgDesc21" />
    </div>
  );
}

export default AboutDesc2;
