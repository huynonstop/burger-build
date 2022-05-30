import { useNavigate } from 'react-router-dom';
import burgerLogo from '../../assets/burger-logo.png';

import classes from './logo.module.css';

const Logo = ({}) => {
  const navigate = useNavigate();
  return (
    <div className={classes.Logo} onClick={() => navigate('/')}>
      <img src={burgerLogo} alt="logo" />
    </div>
  );
};

export default Logo;
