// Layout.jsx
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../../assets/styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />
      <main className="flex-1 px-16 pb-20">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Layout;