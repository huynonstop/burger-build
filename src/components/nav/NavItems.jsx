import classes from './navbar.module.css';

const NavItems = ({ direction, device }) => {
  const itemsClass = `${classes.NavItems} ${classes[direction || 'Row']} ${
    device ? classes[device] : ''
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
