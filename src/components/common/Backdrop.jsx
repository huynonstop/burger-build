import classes from './backdrop.module.css';

const Backdrop = ({ show, onClick, className }) => {
  return show ? (
    <div
      onClick={onClick}
      className={`${classes.Backdrop} ${className || ''}`}
    ></div>
  ) : null;
};

export default Backdrop;
