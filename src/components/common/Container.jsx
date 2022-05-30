import { useClasses } from '../../hooks/useClasses';
import classes from './container.module.css';
const Container = ({ children, className }) => {
  const classesName = useClasses([className, classes.Container]);
  return <div className={classesName}>{children}</div>;
};

export const HeaderContainer = ({ children, className }) => {
  const classesName = useClasses([className, classes.HeaderContainer]);
  return <div className={classesName}>{children}</div>;
};

export const DesktopContainer = ({ children, className }) => {
  const classesName = useClasses([className, classes.Desktop]);
  return <div className={classesName}>{children}</div>;
};

export const MobileContainer = ({ children, className }) => {
  const classesName = useClasses([className, classes.Mobile]);
  return <div className={classesName}>{children}</div>;
};

export default Container;
