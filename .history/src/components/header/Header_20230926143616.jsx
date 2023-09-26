import React from "react";
import Logo from "./logo/Logo";
import BurgerIcon from "./menu/burgermenu/icons/BurgerIcon";


const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <BurgerIcon />
      </div>
    </header>
  );
};

export default Header;
