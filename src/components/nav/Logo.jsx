import burgerLogo from '../../assets/burger-logo.png';

import classes from './logo.module.css';

const Logo = ({}) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="logo" />
    </div>
  );
};

export default Logo;
