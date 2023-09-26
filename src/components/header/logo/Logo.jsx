// Logo.jsx
import React from "react";
import ReactLogo from "../../../assets/images/icons/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="text-2xl font-bold">
      <Link to="/"> <img src={ReactLogo}
        alt="Logo" width={210} height={150} /></Link>
    </div>
  );
};

export default Logo;
