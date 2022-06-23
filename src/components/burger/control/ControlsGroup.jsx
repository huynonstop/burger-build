import { LABEL } from '../../../config/naming';
import Button from '../../common/Button';
import classes from './control.module.css';
import IngredientControl from './IngredientControl';

const ControlsGroup = ({
  showSummaryModal,
  price,
  add,
  ingredients,
  reset,
}) => {
  const ingredientsList = Object.keys(LABEL);
  const totalCount = ingredients.length;
  const ingredientsCount = ingredients.reduce((pre, ingredient) => {
    const preCount = pre[ingredient.type] || 0;
    pre[ingredient.type] = preCount + 1;
    return pre;
  }, {});
  return (
    <div className={classes.ControlsContainer}>
      <h3 className="font-5-4">
        <strong>Total price: {price.toFixed(2)}$</strong>
      </h3>
      <div className={classes.ControlsGroup}>
        {ingredientsList.map((type) => (
          <IngredientControl
            key={type}
            count={ingredientsCount[type] || 0}
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
