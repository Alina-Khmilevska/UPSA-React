// Logo.jsx
import React from "react";
import Logo from "../../../assets/images/icons/logo.svg";

const Logo = () => {
  return (
    <div className="text-2xl font-bold">

      <a href="/">
        <img src={Logo}
          alt="Logo" width={210} height={150} />
      </a>
    </div>
  );
};

export default Logo;
