import { useId } from 'react';
import classes from './input.module.css';

const Input = ({ name, label, tag = 'input', ...otherProps }) => {
  const InputType = tag;
  const id = useId();
  return (
    <div className={classes.InputGroup}>
      <label className={classes.Label} htmlFor={id}>
        {label}
      </label>
      <InputType
        id={id}
        className={classes.Input}
        name={name}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
