import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const Layout = (props) => {
  return (
    <>
      <Header showCart={props.showCart} />
      <div>{props.children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
