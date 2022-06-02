import { useNavigate } from 'react-router-dom';
import burgerLogo from '../../assets/burger-logo.png';
import { useClasses } from '../../hooks/useClasses';

import classes from './logo.module.css';

const Logo = ({ mini = false }) => {
  const navigate = useNavigate();
  const sizeClass = mini ? classes.Mini : '';

  return (
    <div
      className={useClasses([classes.Logo, sizeClass])}
      onClick={() => navigate('/')}
    >
      <img src={burgerLogo} alt="logo" />
    </div>
  );
};

export default Logo;
