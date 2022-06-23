import { useClasses } from '../../hooks/useClasses';
import classes from './arrow.module.css';

const Arrow = ({ direction = 'Up' }) => {
  return (
    <i className={useClasses([classes.Arrow, classes[direction]])} />
  );
};
export default Arrow;
