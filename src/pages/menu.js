import React from "react";
import Header from "../components/common/headers/Header";
import Footer from "../components/common/footer/Footer";
import Title from "../components/menu/title/Title";
import List from "../components/menu/menuList/List";
import ProductImg from "../components/menu/productImg/ProductImg";
import MenuText from "../components/menu/menuText/MenuText";

function menu() {
  return (
    <div>
      <Header />
      <Title />
      <List />
      <ProductImg />
      <MenuText />
      <Footer />
    </div>
  );
}

export default menu;
