import Logo from './Logo';
import classes from './navbar.module.css';
import NavItems from './NavItems';
import HamburgerIcon from '../../assets/hamburger.png';
const Navbar = ({ openSideDraw }) => {
  return (
    <header className={classes.Navbar}>
      <div className="header-container">
        <Logo />
        <button
          className={`${classes.HamburgerButton} ${classes.Mobile}`}
          onClick={openSideDraw}
        >
          <img src={HamburgerIcon} alt="icon"></img>
        </button>
        <NavItems device="Desktop" />
      </div>
    </header>
  );
};

export default Navbar;
