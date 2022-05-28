import classes from './container.module.css';
const Container = ({ children }) => {
  return <div className={classes.Container}>{children}</div>;
};

export const HeaderContainer = ({ children }) => {
  return <div className={classes.HeaderContainer}>{children}</div>;
};

export const DesktopContainer = ({ children }) => {
  return <div className={classes.Desktop}>{children}</div>;
};

export const MobileContainer = ({ children }) => {
  return <div className={classes.Mobile}>{children}</div>;
};

export default Container;
