import { Label, Control, Less, More } from './control.module.css';
const IngredientControl = ({ label, add, remove, count }) => {
  return (
    <div className={Control}>
      <label className={Label}>{label}</label>
      <button className={Less} onClick={remove} disabled={count === 0}>
        -
      </button>
      <button className={More} onClick={add}>
        +
      </button>
    </div>
  );
};

export default IngredientControl;
