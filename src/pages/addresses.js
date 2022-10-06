import React from "react";
import Header from "../components/common/headers/Header";
import Footer from "../components/common/footer/Footer";
import Title from "../components/adresses/title/Title";
import Banner from "../components/adresses/banner/Banner";
import Adresses from "../components/adresses/adresses/Adresses";

function addresses() {
  return (
    <div>
      <Header />
      <Title />
      <Banner />
      <Adresses />
      <Footer />
    </div>
  );
}

export default addresses;
