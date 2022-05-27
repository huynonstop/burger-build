import Logo from './Logo';
import classes from './navbar.module.css';

const Navbar = ({}) => {
  return (
    <header className={classes.Navbar}>
      <div className="header-container">
        <Logo />
        <div>Menu</div>
        <nav>
          <a className={classes.NavItem} href="/">
            <span>Burger</span>
          </a>

          <a className={classes.NavItem} href="/">
            <span>Checkout</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
