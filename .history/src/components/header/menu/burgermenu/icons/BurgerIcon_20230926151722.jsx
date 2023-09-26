// BurgerIcon.jsx
import React from "react";
import Icon from "../../../../../assets/images/icons/burgerIcon.svg";

const BurgerIcon = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img
        src={Icon}
        alt="Burger Icon"
        width={70} 
        height={40}
      />
    </div>
  );
};

export default BurgerIcon;
