// BurgerIcon.jsx
import React from "react";
import { FaBars } from "react-icons/fa";

const BurgerIcon = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <FaBars size={24} />
    </div>
  );
};

export default BurgerIcon;
