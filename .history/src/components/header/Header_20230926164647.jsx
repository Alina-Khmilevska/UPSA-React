import React, { useState } from "react";
import Logo from "./logo/Logo";
import BurgerIcon from "./menu/burgermenu/icons/BurgerIcon";
import Account from "./menu/account/Account";
import Menu from "./menu/burgermenu/Menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };


  const overlayStyle = isMenuOpen ? "block" : "hidden";

  return (
    <div>
      <div className={overlayStyle + " fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-50"}></div>
      <header className="bg-white font-inter z-100">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center justify-between">
            <Account />
            <BurgerIcon onClick={handleMenuToggle} />
            <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
