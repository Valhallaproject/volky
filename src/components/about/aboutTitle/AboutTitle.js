import React from "react";
import Volky from "./../../../assets/VOLKY.svg";
import "./AboutTitle.css"

function AboutTitle() {
  return (
    <div className="aboutTitle">
      <h1>About us.</h1>
      <h3>
        The concept of   <span> <img src={Volky} alt="" /> </span> ?
      </h3>
      <p>
        It is to offer an ideal setting to relax, work or cocoon at the same
        time! A real place of life and meetings where you can enjoy a selection
        of hot or cold coffees 100%bio. In case of small hunger, Volky also
        serves salads, burgers, toast or even delicious pastries.
        <br />
        <br />
        Volky wants to offer a "consumer experience", to offer its customers a
        unique service that they will not find in the cafes of another brand
        (comfort, calm).
      </p>
    </div>
  );
}

export default AboutTitle;
