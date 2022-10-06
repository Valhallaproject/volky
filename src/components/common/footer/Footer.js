import React from "react";
import { Link } from "react-router-dom";
import Linkedin from "./../../../assets/linkedin.png";
import Twitter from "./../../../assets/twitter.png";
import Instagram from "./../../../assets/insta.png";
import Facebook from "./../../../assets/facebook.png"
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerNavItems">
        <ul className="footerItems">
          <li className={window.location.pathname === "/" }>
            <Link to="/">Home</Link>
          </li>
          <li className={window.location.pathname === "/about" }>
            <Link to="/about">About</Link>
          </li>
          <li className={window.location.pathname === "/menu" }>
            <Link to="/menu">Menu</Link>
          </li>
          <li
            className={window.location.pathname === "/contact" }>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="link">
        <p>© 2022 | All rights reserved.</p>
        <div className="social">
          <img src={Facebook} alt="lien facebook"/>
          <img src={Twitter} alt="lien twitter"/>
          <img src={Instagram} alt="lien instagram"/>
          <img src={Linkedin} alt="lien linkedin"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
