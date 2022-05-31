import { useDispatch } from 'react-redux';
import { TYPES } from '../../../config/naming';
import { useClasses } from '../../../hooks/useClasses';
import { ingredientsActions } from '../../../features/ingredients';
import { priceActions } from '../../../features/price';
import classes from './ingredient.module.css';

const BreadBottom = () => <div className={classes.BreadBottom} />;
const BreadTop = () => (
  <div className={classes.BreadTop}>
    <div className={classes.Seeds1}></div>
    <div className={classes.Seeds2}></div>
  </div>
);
const Meat = ({ animate, onClick }) => (
  <div
    className={useClasses([
      classes.Meat,
      animate ? classes.Topping : '',
    ])}
    onClick={onClick}
  />
);
const Cheese = ({ animate, onClick }) => (
  <div
    className={useClasses([
      classes.Cheese,
      animate ? classes.Topping : '',
    ])}
    onClick={onClick}
  />
);
const Salad = ({ animate, onClick }) => (
  <div
    className={useClasses([
      classes.Salad,
      animate ? classes.Topping : '',
    ])}
    onClick={onClick}
  />
);
const Bacon = ({ animate, onClick }) => (
  <div
    className={useClasses([
      classes.Bacon,
      animate ? classes.Topping : '',
    ])}
    onClick={onClick}
  />
);

const INGREDIENTS = {
  [TYPES.bread.bot]: BreadBottom,
  [TYPES.bread.top]: BreadTop,
  [TYPES.meat]: Meat,
  [TYPES.cheese]: Cheese,
  [TYPES.salad]: Salad,
  [TYPES.bacon]: Bacon,
};

const Ingredient = ({ remove, type, ...otherProps }) => {
  const Component = INGREDIENTS[type];
  return <Component onClick={remove} {...otherProps}></Component>;
};
export default Ingredient;
