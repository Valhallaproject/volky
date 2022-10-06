import React from 'react'
import Coffe from "./../../../assets/tasses.png"
import "./Title.css"

function Title() {
  return (
    <div className="title">
        <h1>Menu.</h1>
        <img src={Coffe} alt="tasses de café"/>
    </div>
  )
}

export default Title