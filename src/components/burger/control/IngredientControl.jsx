import { Label, Control, More, Count } from './control.module.css';
const IngredientControl = ({ label, add, count }) => {
  return (
    <div className={Control}>
      <label className={Label}>{label}</label>
      <span className={Count}>{count}</span>
      <button className={More} onClick={add}>
        +
      </button>
    </div>
  );
};

export default IngredientControl;
