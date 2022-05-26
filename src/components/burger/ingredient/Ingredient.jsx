import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Cheese,
  Salad,
  Bacon,
} from './ingredient.module.css';

export const TYPES = {
  bread: {
    bot: 'bread-bottom',
    top: 'bread-top',
  },
  meat: 'meat',
  cheese: 'cheese',
  salad: 'salad',
  bacon: 'bacon',
};

const Ingredient = ({ type }) => {
  if (type === TYPES.bread.bot) return <div className={BreadBottom}></div>;
  if (type === TYPES.bread.top)
    return (
      <div className={BreadTop}>
        <div className={Seeds1}></div>
        <div className={Seeds2}></div>
      </div>
    );
  if (type === TYPES.meat) return <div className={Meat}></div>;
  if (type === TYPES.cheese) return <div className={Cheese}></div>;
  if (type === TYPES.salad) return <div className={Salad}></div>;
  if (type === TYPES.bacon) return <div className={Bacon}></div>;
  return null;
};
export default Ingredient;
