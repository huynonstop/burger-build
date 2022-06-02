import { createPortal } from 'react-dom';
import Backdrop from '../common/Backdrop';
import { MobileContainer } from '../common/Container';
import Logo from './Logo';
import NavItems from './NavItems';
import classes from './sidedraw.module.css';
const sideDrawRoot = document.getElementById('side-draw');
const SideDraw = ({ show, close, closeBtn = false }) => {
  const animationClass = show ? classes.Open : classes.Close;
  const sideDrawClass = `${classes.SideDraw} ${animationClass}`;
  const closeButtonClass = `${classes.SideDrawCloseButton} ${animationClass}`;
  return createPortal(
    <MobileContainer>
      <Backdrop show={show} onClick={!closeBtn && close} />
      <div className={sideDrawClass}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavItems direction="Column" />
      </div>
      {closeBtn && (
        <button onClick={close} className={closeButtonClass}></button>
      )}
    </MobileContainer>,
    sideDrawRoot,
  );
};

export default SideDraw;
