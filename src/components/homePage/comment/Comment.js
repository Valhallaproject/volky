import React from "react";
import IStock from "./../../../assets/iStock.png";
import Image from "./../../../assets/Image.png";
import "./Comment.css";

function Comment() {
  return (
    <div className="comment">
      <div className="left">
        <div>
          <p className="quote">“</p>
          <p className="text">
            Superbe expérience chez Volky ! Lieu très chaleureux et agréable,
            service rapide. J’ai l’habitude de m’y rendre pour travailler ou me
            détendre entre amis, c’est devenu une routine ! Je recommande
            vivement !!
          </p>
        </div>
        <div className="leftDown">
          <div>
            <p className="commentName">
              Kathelyn, Fondatrice de “La Femme d’aujourd’hui”
            </p>
            <p className="commentLieu">Paris, France</p>
          </div>
          <div className="rightDown">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={IStock} alt="" />
      </div>
    </div>
  );
}

export default Comment;
