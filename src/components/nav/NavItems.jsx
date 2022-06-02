import { NavLink } from 'react-router-dom';
import { useClasses } from '../../hooks/useClasses';
import classes from './navbar.module.css';

const NavItems = ({ className, direction }) => {
  const itemsClass = useClasses([
    className || '',
    classes.NavItems,
    classes[direction] || '',
  ]);
  const navLinkClass = ({ isActive }) => {
    return useClasses([
      classes.NavItem,
      isActive ? classes.Active : '',
    ]);
  };
  return (
    <nav className={itemsClass}>
      <NavLink className={navLinkClass} to="/">
        <span>Burger</span>
      </NavLink>
      <NavLink className={navLinkClass} to="/orders">
        <span>Orders</span>
      </NavLink>
      <NavLink className={navLinkClass} to="/auth">
        <span>Sign In</span>
      </NavLink>
    </nav>
  );
};

export default NavItems;
