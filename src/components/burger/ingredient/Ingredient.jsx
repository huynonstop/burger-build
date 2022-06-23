import { TYPES } from '../../../config/naming';
import { useClasses } from '../../../hooks/useClasses';
import classes from './ingredient.module.css';

const BreadBottom = () => <div className={classes.BreadBottom} />;
const BreadTop = () => (
  <div className={classes.BreadTop}>
    <div className={classes.Seeds1}></div>
    <div className={classes.Seeds2}></div>
  </div>
);
const Meat = ({ clickAble, animate, onClick }) => (
  <div
    className={useClasses([
      clickAble ? classes.ClickAble : '',
      classes.Meat,
      animate ? classes.ToppingAnimate : '',
    ])}
    onClick={onClick}
  />
);
const Cheese = ({ clickAble, animate, onClick }) => (
  <div
    className={useClasses([
      clickAble ? classes.ClickAble : '',
      classes.Cheese,
      animate ? classes.ToppingAnimate : '',
    ])}
    onClick={onClick}
  />
);
const Salad = ({ clickAble, animate, onClick }) => (
  <div
    className={useClasses([
      clickAble ? classes.ClickAble : '',
      classes.Salad,
      animate ? classes.ToppingAnimate : '',
    ])}
    onClick={onClick}
  />
);
const Bacon = ({ clickAble, animate, onClick }) => (
  <div
    className={useClasses([
      clickAble ? classes.ClickAble : '',
      classes.Bacon,
      animate ? classes.ToppingAnimate : '',
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

const Ingredient = ({
  remove,
  type,
  moveAble = false,
  clickAble,
  ...otherProps
}) => {
  const Component = INGREDIENTS[type];
  return (
    <Component
      clickAble={clickAble}
      onClick={remove}
      {...otherProps}
    ></Component>
  );
};
export default Ingredient;
