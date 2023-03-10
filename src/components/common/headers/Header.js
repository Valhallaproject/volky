import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./../../../assets/menu.svg";
import Close from "./../../../assets/close-white.svg";
import Logo from "./../../../assets/VOLKY.svg"
import "./Header.css";

const Navbar = () => {
  const [mobileNavIcon, setMobileNavIcon] = useState(Burger);

  const toggleMobileNav = () => {
    let mobileNav = document.querySelector(".navItems");
    mobileNav.classList.toggle("active");
    mobileNav.classList.contains("active")
      ? setMobileNavIcon(Close)
      : setMobileNavIcon(Burger);
  };

  return (
    <nav>
      <Link to="/">
      <div className="logo">
        <img src={Logo} alt="Logo Volky" />
        <p>A new way to take a break.</p>
      </div>
      </Link>
      <div className="navItems">
        <ul className="items">
          <li className={window.location.pathname === "/about" && "active_nav"}>
            <Link to="/about">About us</Link>
          </li>
          <li
            className={window.location.pathname === "/menu" && "active_nav"}
          >
            <Link to="/menu">Menu</Link>
          </li>
          <li
            className={window.location.pathname === "/addresses" && "active_nav"}
          >
            <Link to="/addresses">Our adresse</Link>
          </li>
        </ul>
      </div>
      <button className="mobilNav">
        <img
          onClick={toggleMobileNav}
          src={mobileNavIcon}
          alt="mobileNavIcon"
        />
      </button>
    </nav>
  );
};

export default Navbar;
