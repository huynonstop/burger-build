import { createPortal } from 'react-dom';
import Backdrop from '../common/Backdrop';
import { MobileContainer } from '../common/Container';
import Logo from './Logo';
import NavItems from './NavItems';
import classes from './sidedraw.module.css';
const sideDrawRoot = document.getElementById('side-draw');
const SideDraw = ({ show, close }) => {
  const showClass = show ? classes.Open : classes.Close;

  const sideDrawClass = `${classes.SideDraw} ${showClass}`;
  const closeButtonClass = `${classes.SideDrawCloseButton} ${showClass}`;
  return createPortal(
    <MobileContainer>
      <Backdrop show={show} />
      <div className={sideDrawClass}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavItems direction="Column" />
      </div>
      <button onClick={close} className={closeButtonClass}></button>
    </MobileContainer>,
    sideDrawRoot,
  );
};

export default SideDraw;
