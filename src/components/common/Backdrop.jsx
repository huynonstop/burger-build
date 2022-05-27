const Backdrop = ({ show, click, className }) => {
  return show ? <div onClick={click} className={className}></div> : null;
};

export default Backdrop;
