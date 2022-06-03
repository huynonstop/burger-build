import { useClasses } from '../../hooks/useClasses';
import classes from './button.module.css';

const COLOR_CLASS = {
  primary: classes.Primary,
  danger: classes.Danger,
  confirm: classes.Confirm,
  'primary-dark': classes.PrimaryDark,
};

const Button = ({
  reversed,
  color,
  children,
  click,
  className,
  ...otherProps
}) => {
  const colorClass = color ? COLOR_CLASS[color] : COLOR_CLASS.primary;
  const reversedClass = reversed ? classes.Reversed : '';
  return (
    <button
      className={useClasses([
        classes.Button,
        colorClass,
        reversedClass,
        className,
      ])}
      onClick={click}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
