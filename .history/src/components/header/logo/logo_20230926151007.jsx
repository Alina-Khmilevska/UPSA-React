// Logo.jsx
import React from "react";
import ReactLogo from "../../../../assets/images/react-logo.svg";

const Logo = () => {
  return (
    <div className="text-2xl font-bold">

      <a href="/">
        <img src={ReactLogo}
 alt="Logo" width={32} height={32} />
      </a>
    </div>
  );
};

export default Logo;
