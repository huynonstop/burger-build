import { createPortal } from 'react-dom';

import Backdrop from './Backdrop';

import { useDelayUnmount } from '../../hooks/useDelayUnmount';
import classes from './modal.module.css';
import { useClasses } from '../../hooks/useClasses';

const modalRoot = document.getElementById('modal');

const Modal = ({ show, children, onClose }) => {
  const shouldRender = useDelayUnmount(show, 300);
  const animationClass = show ? classes.Show : classes.Hide;
  return createPortal(
    <>
      <Backdrop
        className={`${animationClass}`}
        show={shouldRender}
        onClick={onClose}
      />
      <dialog
        className={useClasses([
          classes.Modal,
          animationClass,
          'border-default',
          'border-radius-1',
          'p-3',
        ])}
        open={shouldRender}
      >
        {children}
      </dialog>
    </>,
    modalRoot,
  );
};
export default Modal;
