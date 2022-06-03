import { useNavigate } from 'react-router-dom';
import burgerLogo from '../../assets/burger-logo.png';
import { useClasses } from '../../hooks/useClasses';
import Flex from '../common/Flex';

import classes from './logo.module.css';

const Logo = ({ className, mini = false, label }) => {
  const navigate = useNavigate();
  const sizeClass = mini ? classes.Mini : '';

  return (
    <Flex
      className={useClasses([
        classes.Logo,
        sizeClass,
        className,
        'items-center gap-1-2',
      ])}
      onClick={() => navigate('/')}
    >
      <img src={burgerLogo} alt="logo" />
      {label && <h3>{label}</h3>}
    </Flex>
  );
};

export default Logo;
