// Layout.jsx
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../../assets/styles/global.scss";
import MembershipForm from "../shared/forms/MembershipForm";

const Layout = ({ children }) => {
  return (
    <div className=" flex flex-col min-h-screen font-inter">
      <Header />
      <main className="container mx-auto flex-1 px-5 pb-20">
        {children}
      </main>
      <MembershipForm />
      <Footer className="mt-auto" />
    </div>
  );
};

export default Layout;
