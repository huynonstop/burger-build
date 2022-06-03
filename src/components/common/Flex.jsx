import { forwardRef } from 'react';
import { useClasses } from '../../hooks/useClasses';
import './flex.css';

const Flex = forwardRef(
  (
    { children, className, column, tag = 'div', ...otherProps },
    ref,
  ) => {
    const flexColumn = column ? 'flex-column' : '';
    const classes = useClasses(['flex', className, flexColumn]);
    const CustomTag = tag;
    return (
      <CustomTag ref={ref} className={classes} {...otherProps}>
        {children}
      </CustomTag>
    );
  },
);

export default Flex;
