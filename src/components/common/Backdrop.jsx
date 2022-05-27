import classes from './backdrop.module.css';

const Backdrop = ({ show, click, className }) => {
  return show ? (
    <div
      onClick={click}
      className={`${classes.Backdrop} ${className || ''}`}
    ></div>
  ) : null;
};

export default Backdrop;
