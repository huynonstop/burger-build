import { TYPES } from '../ingredient/Ingredient';
import classes from './control.module.css';
import IngredientControl from './IngredientControl';

const LABEL = {
  [TYPES.meat]: 'Meat',
  [TYPES.cheese]: 'Cheese',
  [TYPES.salad]: 'Salad',
  [TYPES.bacon]: 'Bacon',
};

const ControlsGroup = ({ price, add, remove, ingredients }) => {
  const ingredientsList = Object.keys(ingredients);
  const totalCount = ingredientsList.reduce((pre, type) => {
    return pre + ingredients[type];
  }, 0);
  return (
    <div className={classes.ControlsGroup}>
      <p className={classes.Price}>
        <strong>Total price: {price.toFixed(2)}$</strong>
      </p>
      {ingredientsList.map((type) => (
        <IngredientControl
          key={type}
          count={ingredients[type]}
          add={() => add(type)}
          remove={() => remove(type)}
          label={LABEL[type]}
        />
      ))}
      <button className={classes.Order} disabled={totalCount === 0}>
        <strong>ORDER NOW</strong>
      </button>
    </div>
  );
};

export default ControlsGroup;
