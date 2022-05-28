import Logo from './Logo';
import classes from './navbar.module.css';
import NavItems from './NavItems';
import HamburgerIcon from '../../assets/hamburger.png';
import {
  DesktopContainer,
  HeaderContainer,
  MobileContainer,
} from '../common/Container';
const Navbar = ({ openSideDraw }) => {
  return (
    <header className={classes.Navbar}>
      <HeaderContainer>
        <Logo />
        <MobileContainer>
          <button
            className={`${classes.HamburgerButton}`}
            onClick={openSideDraw}
          >
            <img src={HamburgerIcon} width={32} height={32} alt="icon"></img>
          </button>
        </MobileContainer>
        <DesktopContainer>
          <NavItems />
        </DesktopContainer>
      </HeaderContainer>
    </header>
  );
};

export default Navbar;
