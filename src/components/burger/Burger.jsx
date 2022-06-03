import { TYPES } from '../../config/naming';
import { useClasses } from '../../hooks/useClasses';
import classes from './burger.module.css';
import Ingredient from './ingredient/Ingredient';
const emptyMessage = <p>Please select your ingredient</p>;

const Burger = ({
  className,
  ingredients,
  remove,
  animate = true,
}) => {
  const transformedIngredients = Object.keys(ingredients)
    .map((type) =>
      [...Array(Number(ingredients[type]))].map((_, i) => {
        return (
          <Ingredient
            remove={() => remove(type)}
            animate={animate}
            key={`${type}-${i}`}
            type={type}
          />
        );
      }),
    )
    .reduce((pre, cur) => [...pre, ...cur], []);
  return (
    <div
      className={useClasses([
        classes.Burger,
        className,
        'notion-scrollbar',
      ])}
    >
      <Ingredient type={TYPES.bread.top} />
      {transformedIngredients.length === 0
        ? emptyMessage
        : transformedIngredients}
      <Ingredient type={TYPES.bread.bot} />
    </div>
  );
};
export default Burger;
