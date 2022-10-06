import React from "react";
import DecorMenu from "./../../../assets/menuDecor.png";
import "./List.css";

function List() {
  return (
    <div className="list">
      <div className="sectionMenu">
      <div>
        <h2>HOT DRINKS</h2>
        <div className="productList">
          <p>
            Le Classic
            <br />
            L’ espresso
            <br />
            Le double espresso
            <br />
            Le coco latte
            <br />
            Le MatchaLe <br />
            Chocolatte
            <br />
            Le Red Velvet
            <br />
            Le Thé Vert
          </p>
          <p className="price">
            6€
            <br />
            5€
            <br />
            8€
            <br />
            10€
            <br />
            10€
            <br />
            12€
            <br />
            14€
            <br />
            7€
          </p>
        </div>
      </div>
      <div>
        <h2>COLD DRINKS</h2>
        <div className="productList">
          <p>
            Iced Latté
            <br />
            Le Pinko
            <br />
            Le thé glacé
            <br />
            Fuze Tea
            <br />
            Coca-Cola
            <br />
            Jus d’orange préssé
            <br />
            Jus de Coco maison
            <br />
            Jus d’ananas maison
            <br />
            Jus de pomme maison
          </p>
          <p className="price">
            8€ <br />
            14€
            <br /> 7€ <br />
            5€ <br />
            5€
            <br /> 6€ <br />
            8€
            <br /> 6€ <br />
            6€
          </p>
        </div>
      </div>
      <h2>ALCOHOLS</h2>
      <div className="productList">
        <p>
          Le Mojito
          <br />
          Iced Copa Cabana
          <br />
          The Volky Special
          <br />
          Silky-Rhum
          <br />
          Shot
        </p>
        <p className="price">
          12€ <br />
          14€
          <br />
          7€ <br />
          5€
          <br /> 5€
        </p>
      </div>
      <div>
        <h2>SALTY SNACKS</h2>
        <div className="productList">
          <p>
            Avocado Toast
            <br />
            Volky Burger
            <br />
            La salade classique
            <br />
            Salade de thon au gingembre
          </p>
          <p className="price">
            8€
            <br /> 16€
            <br /> 14€
            <br /> 15€
          </p>
        </div>
      </div>
      <div>
        <h2>SWEET SNACKS</h2>
        <div className="productList">
          <p>
            La Gaufrette Les Minies
            <br />
            Les Pancakes
            <br /> fruits frais
            <br />
            Les petites crêpes
          </p>
          <p className="price">
            8€ <br />
            7€ <br />
            12€
            <br /> 12€
          </p>
        </div>
      </div>
      </div>
      <div className="decor">
        <img src={DecorMenu} alt="" />{" "}
      </div>
    </div>
  );
}

export default List;
