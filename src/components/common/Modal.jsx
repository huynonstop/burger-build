import { createPortal } from 'react-dom';

import Backdrop from './Backdrop';

import { useDelayUnmount } from '../../hooks/useDelayUnmount';
import classes from './modal.module.css';
import classes2 from './backdrop.module.css';

const modalRoot = document.getElementById('modal');

const Modal = ({ show, children, close }) => {
  const isMount = useDelayUnmount(show, 300);
  const fadeClass = show ? classes.Show : classes.Hide;
  return createPortal(
    <>
      <Backdrop
        className={`${classes2.Backdrop} ${fadeClass}`}
        show={isMount}
        click={close}
      />
      <dialog className={`${classes.Modal} ${fadeClass}`} open={isMount}>
        {children}
      </dialog>
    </>,
    modalRoot,
  );
};
export default Modal;
