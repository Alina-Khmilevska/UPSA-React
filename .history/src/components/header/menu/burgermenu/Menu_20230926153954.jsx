// Menu.jsx
import React from "react";
import CloseIcon from "../../../../assets/images/icons/close.svg";
import "./Menu.css";

const Menu = ({ isOpen, onClose }) => {
  const menuStyle = {
    width: isOpen ? "50%" : "0",
    right: isOpen ? "0" : "-50%",
  };

  return (
    <div
      className="upsa-bg-grey h-full text-white fixed top-0 right-0 transition-all duration-300 ease-in-out px-20" 
      style={menuStyle}
    >
      <button className="absolute top-10 right-10" onClick={onClose}>
        <img
        src={CloseIcon}
        alt="Close Icon"
        width={50}
        height={50}
        />
      </button>
      
      <ul className="mt-40 mr-4">
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  );
};

export default Menu;
