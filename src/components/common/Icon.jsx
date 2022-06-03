import { useClasses } from '../../hooks/useClasses';
import classes from './icon.module.css';
const Icon = ({ className, src, ...otherProps }) => {
  return (
    <div
      className={useClasses([className, classes.Icon])}
      {...otherProps}
    >
      <img src={src} alt="icon" />
    </div>
  );
};
export default Icon;
