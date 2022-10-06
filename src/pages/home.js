import React from 'react'
import Footer from '../components/common/footer/Footer'
import Banner from '../components/homePage/banner/Banner'
import HomeText from '../components/homePage/homeText/HomeText'
import Images from '../components/homePage/images/Images'
import Header from "./../components/common/headers/Header"
import Comment from "./../components/homePage/comment/Comment"
import "./style.css"

function home() {
  return (
    <div className="home">
        <Header />
        <Banner />
        <HomeText />
        <Images />
        <Comment />
        <Footer />
    </div>
  )
}

export default home