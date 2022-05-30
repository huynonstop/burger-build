import classes from './navbar.module.css';

const NavItems = ({ className, direction }) => {
  const itemsClass = `${className || ''} ${classes.NavItems} ${
    classes[direction] || ''
  }`;
  return (
    <nav className={itemsClass}>
      <a className={classes.NavItem} href="/">
        <span>Burger</span>
      </a>

      <a className={classes.NavItem} href="/">
        <span>Checkout</span>
      </a>
    </nav>
  );
};

export default NavItems;
