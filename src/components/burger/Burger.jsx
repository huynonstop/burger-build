import classes from './burger.module.css';
import Ingredient, { TYPES } from './ingredient/Ingredient';

const emptyMessage = <p>Please select your ingredient</p>;

const Burger = ({ ingredients }) => {
  const transformedIngredients = Object.keys(ingredients)
    .map((type) =>
      [...Array(ingredients[type])].map((_, i) => {
        return <Ingredient key={`${type}-${i}`} type={type} />;
      }),
    )
    .reduce((pre, cur) => [...pre, ...cur], []);
  return (
    <div className={classes.Burger}>
      <Ingredient type={TYPES.bread.top} />
      {transformedIngredients.length === 0
        ? emptyMessage
        : transformedIngredients}
      <Ingredient type={TYPES.bread.bot} />
    </div>
  );
};
export default Burger;
