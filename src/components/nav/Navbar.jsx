import Logo from './Logo';
import classes from './navbar.module.css';
import NavItems from './NavItems';
import SideDraw from './SideDraw';
import HamburgerIcon from '../../assets/hamburger.png';
import {
  DesktopContainer,
  HeaderContent,
  MobileContainer,
} from '../common/Container';
import { useState } from 'react';
const Navbar = () => {
  const [showSideDraw, setShowSideDraw] = useState(false);
  const openSideDraw = () => {
    setShowSideDraw(true);
  };
  const closeSideDraw = () => {
    setShowSideDraw(false);
  };
  return (
    <header className={classes.Navbar}>
      <SideDraw show={showSideDraw} close={closeSideDraw} />
      <HeaderContent>
        <Logo />
        <MobileContainer>
          <button
            className={`${classes.HamburgerButton}`}
            onClick={openSideDraw}
          >
            <img
              src={HamburgerIcon}
              width={32}
              height={32}
              alt="icon"
            ></img>
          </button>
        </MobileContainer>
        <DesktopContainer className="h-full">
          <NavItems />
        </DesktopContainer>
      </HeaderContent>
    </header>
  );
};

export default Navbar;
