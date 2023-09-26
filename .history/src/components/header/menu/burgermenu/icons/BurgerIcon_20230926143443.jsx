// BurgerIcon.jsx
import React from "react";

const BurgerIcon = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img
        src="/icons/burgerIcons.svg"
        alt="Burger Icon"
        width={24} // Ширина зображення (за бажанням)
        height={24} // Висота зображення (за бажанням)
      />
    </div>
  );
};

export default BurgerIcon;
