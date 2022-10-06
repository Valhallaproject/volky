import React from 'react'
import Header from '../components/common/headers/Header'
import Footer from '../components/common/footer/Footer'
import AboutBanner from '../components/about/aboutBanner/AboutBanner'
import AboutTitle from '../components/about/aboutTitle/AboutTitle'
import AboutDesc1 from '../components/about/aboutDesc1/AboutDesc1'
import AboutDesc2 from '../components/about/aboutDesc2/AboutDesc2'
import AboutDesc3 from '../components/about/aboutDesc3/AboutDesc3'

function about() {
  return (
    <div className="aboutPage">
        <Header />
        <AboutBanner />
        <AboutTitle />
        <AboutDesc1 />
        <AboutDesc2 />
        <AboutDesc3 />
        <Footer />
    </div>
  )
}

export default about