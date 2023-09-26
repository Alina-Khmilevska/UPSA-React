import React from "react";

const Footer = () => {
  return (
    <footer className="upsa-bg-grey text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <p className="text-center text-sm">
            &copy;{new Date().getFullYear()} Ukrainian Pharmaceutical Students Assocciation
          </p>
        </div>
      </div>
      <div className="flex-row justify-between items-center">
        </div>
    </footer>
  );
};

export default Footer;
