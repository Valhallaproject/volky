import React from "react";
import Logo from "./../../../assets/VOLKY.svg";
import "./HomeText.css"

function HomeText() {
  return (
    <div className="homeText">
      <img src={Logo} alt="logo" />
      <p>
        is a coffee & snack shop made for those who want to give themselves a
        moment of privileged relaxation.<br/>It offers the drink or sweet of your
        choice in a luxurious setting.<br/> Sit back, take your time and relax over a
        Red Velvet and a nice waffle.
      </p>
    </div>
  );
}

export default HomeText;
