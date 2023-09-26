import React from "react";
import Logo from "./logo/Logo";
import BurgerIcon from "./menu/burgermenu/icons/BurgerIcon";
import Account from "./menu/account/Account";
import Menu from "./menu/Menu";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center justify-between">
          <Account />
          <BurgerIcon />
          <BurgerIcon onClick={handleMenuToggle} />
        <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;

