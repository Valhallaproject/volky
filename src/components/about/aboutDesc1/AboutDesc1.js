import React from "react";
import Vector from "./../../../assets/Vector1.png";
import Tasse2 from "./../../../assets/Tasse2.png";
import Coffee from "./../../../assets/Coffee-Beans.png";
import "./AboutDesc1.css";

function AboutDesc1() {
  return (
    <div className="aboutDesc1">
      <div className="text">
        <h3>Our organic coffee</h3>
        <p>
          Our coffee is 100% from organic farming and we exclusively select
          Arabica beans.
          <br />
          <br />
          Our milks and plant alternatives are also organic. We cultivate
          lasting relationships with coffee growers and we take the time to
          train each of our baristas. <br />
          <br />
          The taste is only better!
        </p>
      </div>
      <img src={Vector} alt="" className="imgDesc11" />
      <img src={Tasse2} alt="" className="imgDesc12" />
      <img src={Coffee} alt="" className="imgDesc13" />
    </div>
  );
}

export default AboutDesc1;
