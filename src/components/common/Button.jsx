import classes from './button.module.css';

const COLOR_CLASS = {
  primary: classes.Primary,
  danger: classes.Danger,
  confirm: classes.Confirm,
};

const Button = ({ color, children, click, className, ...otherProps }) => {
  const colorClass = color ? COLOR_CLASS[color] : COLOR_CLASS.primary;
  return (
    <button
      className={`${classes.Button} ${colorClass} ${className}`}
      onClick={click}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
