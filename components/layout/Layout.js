import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {/* <Menu /> */}
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
