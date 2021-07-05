import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

interface MasterProps {
  children: React.ReactNode;
}

const Master = ({ children = null }: MasterProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Master;
