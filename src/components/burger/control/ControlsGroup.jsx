import { LABEL, TYPES } from '../../../config/naming';
import Button from '../../common/Button';
import classes from './control.module.css';
import IngredientControl from './IngredientControl';

const ControlsGroup = ({
  showSummaryModal,
  price,
  add,
  remove,
  ingredients,
  reset,
}) => {
  const ingredientsList = Object.keys(ingredients);
  const totalCount = ingredientsList.reduce((pre, type) => {
    return pre + ingredients[type];
  }, 0);
  return (
    <div className={classes.ControlsContainer}>
      <p className={classes.Price}>
        <strong>Total price: {price.toFixed(2)}$</strong>
      </p>
      <div className={classes.ControlsGroup}>
        {ingredientsList.map((type) => (
          <IngredientControl
            key={type}
            count={ingredients[type]}
            add={() => add(type)}
            remove={() => remove(type)}
            label={LABEL[type]}
          />
        ))}
      </div>

      <Button disabled={totalCount === 0} onClick={showSummaryModal}>
        <strong>ORDER NOW</strong>
      </Button>

      <Button
        disabled={totalCount === 0}
        color="danger"
        onClick={reset}
      >
        <strong>Reset</strong>
      </Button>
    </div>
  );
};

export default ControlsGroup;
