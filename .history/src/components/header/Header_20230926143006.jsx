import React from "react";
import Logo from "./logo/Logo";
import BurgerIcon from "./menu/burgermenu/BurgerIcon/BurgerIcon";


const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <BurgerIcon />
      </div>
    </header>
  );
};

export default Header;
