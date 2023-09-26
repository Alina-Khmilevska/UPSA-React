import React from "react";
import Logo from "./logo/Logo";
import BurgerIcon from "./menu/burgermenu/icons/BurgerIcon";
import Account from "./menu/account/Account";


const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center justify-between">
          <Account />
          <BurgerIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
