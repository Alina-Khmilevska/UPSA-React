import React from "react";
import LanguageIcons from "../shared/icons/LanguageIcons";

const Footer = () => {
  return (
    <footer className="upsa-bg-grey text-white py-4">
      <div className="flex-row justify-between items-center">
        <LanguageIcons />

      <p className="text-center text-sm">
            &copy;{new Date().getFullYear()} Ukrainian Pharmaceutical Students Assocciation
          </p>
        </div>
    </footer>
  );
};

export default Footer;
