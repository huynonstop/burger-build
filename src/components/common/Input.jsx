import { forwardRef, useId } from 'react';
import { useClasses } from '../../hooks/useClasses';
import classes from './input.module.css';

const Input = forwardRef(
  (
    { children, inline, name, label, tag = 'input', ...otherProps },
    ref,
  ) => {
    const InputType = tag;
    const id = useId();
    const groupClass = useClasses([
      inline ? 'items-center' : 'flex-column',
      classes.InputGroup,
    ]);
    return (
      <div className={groupClass}>
        <label className={classes.Label} htmlFor={id}>
          {label}
        </label>
        <InputType
          id={id}
          ref={ref}
          className={classes.Input}
          name={name}
          {...otherProps}
        >
          {children}
        </InputType>
      </div>
    );
  },
);
export default Input;
