import { useClasses } from '../../hooks/useClasses';
import classes from './container.module.css';
import Flex from './Flex';
const Container = ({ children, className, column }) => {
  const classesName = useClasses([className, classes.Container]);
  return (
    <Flex column={column} className={classesName} tag="section">
      {children}
    </Flex>
  );
};

export const HeaderContent = ({ children, className }) => {
  const classesName = useClasses([className, classes.HeaderContent]);
  return <Flex className={classesName}>{children}</Flex>;
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
