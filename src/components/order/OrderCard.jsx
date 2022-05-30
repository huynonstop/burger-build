import { LABEL } from '../../config/naming';
import classes from './order.module.css';

const OrderCard = ({ ingredients, price }) => {
  const ingredientsString = Object.keys(ingredients)
    .map((type) => {
      return `${ingredients[type]} ${LABEL[type]}`;
    })
    .join(', ');
  return (
    <article className={classes.OrderCard}>
      <p>Ingredients: {ingredientsString}</p>
      <p>
        Price: <strong>{price}$</strong>
      </p>
    </article>
  );
};

export default OrderCard;
