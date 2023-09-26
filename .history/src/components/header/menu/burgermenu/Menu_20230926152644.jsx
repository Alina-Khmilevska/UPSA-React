// Menu.jsx
import React from "react";

const Menu = ({ isOpen, onClose }) => {
  const menuStyle = {
    width: isOpen ? "50%" : "0",
  };

  return (
    <div
      className="bg-gray-800 h-full text-white fixed top-0 left-0 transition-all duration-300 ease-in-out"
      style={menuStyle}
    >
      <button className="absolute top-4 right-4" onClick={onClose}>
        Close
      </button>
      <ul className="mt-12 ml-4">
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        {/* Додайте інші пункти меню */}
      </ul>
    </div>
  );
};

export default Menu;
