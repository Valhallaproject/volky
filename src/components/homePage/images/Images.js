import React from 'react'
import Img1 from "./../../../assets/banner1.png"
import Img2 from "./../../../assets/banner2.png"
import "./Images.css"

function Images() {
  return (
    <div className="images">
        <img src={Img1} alt="" className="img1"/>
        <img src={Img2} alt="" className="img2"/>
    </div>
  )
}

export default Images