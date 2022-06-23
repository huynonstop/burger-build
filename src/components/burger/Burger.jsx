import { TYPES } from '../../config/naming';
import { useClasses } from '../../hooks/useClasses';
import Arrow from '../common/Arrow';
import classes from './burger.module.css';
import Ingredient from './ingredient/Ingredient';
const EmptyMessage = <p>Please select your ingredient</p>;

const Burger = ({
  className,
  ingredients,
  remove,
  moveDown,
  moveUp,
  clickAble = false,
  moveAble = false,
  animate = true,
}) => {
  const TransformedIngredients = ingredients.map(
    (ingredient, idx) => {
      return (
        <div
          key={`${ingredient.id}`}
          className={classes.ToppingWarper}
        >
          <Ingredient
            clickAble={clickAble}
            remove={() => remove(ingredient)}
            animate={animate}
            type={ingredient.type}
          />
          {moveAble && (
            <div className={classes.IngredientMoveControl}>
              {idx !== 0 && (
                <button
                  type="button"
                  className={classes.IngredientMoveButton}
                  onClick={() => moveUp(idx)}
                >
                  <Arrow direction="Up" />
                </button>
              )}
              {idx !== ingredients.length - 1 && (
                <button
                  type="button"
                  className={classes.IngredientMoveButton}
                  onClick={() => moveDown(idx)}
                >
                  <Arrow direction="Down" />
                </button>
              )}
            </div>
          )}
        </div>
      );
    },
  );
  return (
    <div
      className={useClasses([
        classes.Burger,
        className,
        'notion-scrollbar',
      ])}
    >
      <Ingredient type={TYPES.bread.top} />
      {ingredients.length === 0
        ? EmptyMessage
        : TransformedIngredients}
      <Ingredient type={TYPES.bread.bot} />
    </div>
  );
};
export default Burger;
