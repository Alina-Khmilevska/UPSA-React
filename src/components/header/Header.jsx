import React, { useState } from "react";
import Logo from "./Logo";
import BurgerIcon from "./menu/burgermenu/icons/BurgerIcon";
import Account from "./menu/Account";
import Menu from "./menu/burgermenu/Menu";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <div>
      <header className="bg-white font-inter py-10 border-b-2 border-mint container mx-auto">
        <div className="flex justify-between">
          <Logo />
          <SearchBar />
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
