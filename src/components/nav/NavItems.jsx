import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { authActions } from '../../features/auth';
import { useAuth } from '../../hooks/useAuth';
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
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(authActions.logout());
    navigate('/auth', { replace: true });
  };
  return (
    <nav className={itemsClass}>
      <NavLink className={navLinkClass} to="/">
        <span>Burger</span>
      </NavLink>

      {isAuth ? (
        <>
          <NavLink className={navLinkClass} to="/orders">
            <span>Orders</span>
          </NavLink>
          <button onClick={onLogout} className={classes.NavItem}>
            <span>Logout</span>
          </button>
        </>
      ) : (
        <NavLink className={navLinkClass} to="/auth">
          <span>SignIn</span>
        </NavLink>
      )}
    </nav>
  );
};

export default NavItems;
