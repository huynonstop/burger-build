import { createPortal } from 'react-dom';
import Backdrop from '../common/Backdrop';
import Logo from './Logo';
import NavItems from './NavItems';
import classes from './sidedraw.module.css';
const sideDrawRoot = document.getElementById('side-draw');
const SideDraw = ({ show, close }) => {
  const sideDrawClass = `${classes.SideDraw} ${
    show ? classes.Open : classes.Close
  }`;
  return createPortal(
    <>
      <Backdrop show={show} click={close} />
      <div className={sideDrawClass}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavItems direction="Column" device="Mobile" />
      </div>
    </>,
    sideDrawRoot,
  );
};

export default SideDraw;
