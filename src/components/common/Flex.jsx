import { useClasses } from '../../hooks/useClasses';
import './flex.css';

const Flex = ({
  children,
  className,
  column,
  tag = 'div',
  ...otherProps
}) => {
  const flexColumn = column ? 'flex-column' : '';
  const classes = useClasses(['flex', className, flexColumn]);
  const CustomTag = tag;
  return (
    <CustomTag className={classes} {...otherProps}>
      {children}
    </CustomTag>
  );
};

export default Flex;
