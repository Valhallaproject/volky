import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"

function Banner() {
  return (
    <div className="banner">
        <h1>A new way<br/>to take a break.</h1>
        <button><Link to="/menu">Our menu</Link></button>
    </div>
  )
}

export default Banner
