import { Label, Control, Count } from '../control/control.module.css';
const IngredientInfo = ({ label, count }) => {
  return (
    <div className={Control}>
      <label className={Label}>{label}</label>
      <span className={Count}>{count}</span>
    </div>
  );
};

export default IngredientInfo;
