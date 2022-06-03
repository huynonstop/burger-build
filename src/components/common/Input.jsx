import { forwardRef, useId } from 'react';
import { useClasses } from '../../hooks/useClasses';
import classes from './input.module.css';

const Input = forwardRef(
  (
    {
      id,
      children,
      inline,
      name,
      label,
      info,
      tag = 'input',
      ...otherProps
    },
    ref,
  ) => {
    const InputType = tag;
    const inputId = `${id}:${name}`;
    const groupClass = useClasses([
      inline ? 'items-center' : 'flex-column',
      classes.InputGroup,
    ]);
    return (
      <div className={groupClass}>
        {label && (
          <label className={classes.Label} htmlFor={inputId}>
            {label}
          </label>
        )}
        <InputType
          id={inputId}
          ref={ref}
          className={classes.Input}
          name={name}
          {...otherProps}
        >
          {children}
        </InputType>
        {info && <span className={classes.Info}>{info}</span>}
      </div>
    );
  },
);
export default Input;
