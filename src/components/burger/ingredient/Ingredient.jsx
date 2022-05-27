import { TYPES } from '../../../config/naming';
import classes, { Topping } from './ingredient.module.css';

const BreadBottom = () => <div className={classes.BreadBottom} />;
const BreadTop = () => (
  <div className={classes.BreadTop}>
    <div className={classes.Seeds1}></div>
    <div className={classes.Seeds2}></div>
  </div>
);
const Meat = () => <div className={`${classes.Meat} ${classes.Topping}`} />;
const Cheese = () => <div className={`${classes.Cheese} ${classes.Topping}`} />;
const Salad = () => <div className={`${classes.Salad} ${classes.Topping}`} />;
const Bacon = () => <div className={`${classes.Bacon} ${classes.Topping}`} />;

const Ingredient = ({ type }) => {
  if (type === TYPES.bread.bot) return <BreadBottom />;
  if (type === TYPES.bread.top) return <BreadTop />;
  if (type === TYPES.meat) return <Meat />;
  if (type === TYPES.cheese) return <Cheese />;
  if (type === TYPES.salad) return <Salad />;
  if (type === TYPES.bacon) return <Bacon />;
  return null;
};
export default Ingredient;
