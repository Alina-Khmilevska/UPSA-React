// BurgerIcon.jsx
import React from "react";

const BurgerIcon = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img
        src="./icons/burgerIcons.svg"
        alt="Burger Icon"
        width={24} 
        height={24}
      />
    </div>
  );
};

export default BurgerIcon;
