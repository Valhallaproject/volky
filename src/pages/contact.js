import React from "react";
import Header from "../components/common/headers/Header";
import Footer from "../components/common/footer/Footer";
import Title from "../components/contact/title/Title";
import Form from "../components/contact/form/Form";

function contact() {
  return (
    <div>
      <Header />
      <Title />
      <Form />
      <Footer />
    </div>
  );
}

export default contact;
