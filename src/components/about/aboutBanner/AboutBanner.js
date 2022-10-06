import React from 'react'
import BannerAbout from "./../../../assets/bannerAbout.png"
import "./AboutBanner.css"

function AboutBanner() {
  return (
    <div className="aboutBanner">
        <img src={BannerAbout} alt=""/>
    </div>
  )
}

export default AboutBanner