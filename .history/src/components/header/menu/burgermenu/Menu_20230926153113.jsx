// Menu.jsx
import React from "react";

const Menu = ({ isOpen, onClose }) => {
  const menuStyle = {
    width: isOpen ? "50%" : "0",
    right: isOpen ? "0" : "-50%",
  };

  return (
    <div
      className="bg-gray-800 h-full text-white fixed top-0 right-0 transition-all duration-300 ease-in-out"
      style={menuStyle}
    >
      <button className="absolute top-4 right-4" onClick={onClose}>
        <img
        src="https://img.icons8.com/ios-glyphs/30/ffffff/multiply.png"
        alt="Close Icon"
        width={30}
        height={30}
        />
      </button>
      
      <ul className="mt-12 mr-4">
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </div>
  );
};

export default Menu;
