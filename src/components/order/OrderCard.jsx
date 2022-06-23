import { LABEL } from '../../config/naming';
import Flex from '../common/Flex';
import QRImage from '../common/QRImage';
import classes from './order.module.css';
import { Link } from 'react-router-dom';

const OrderCard = ({
  ingredientsCount,
  orderId,
  createdAt,
  price,
}) => {
  const ingredientsString = Object.keys(ingredientsCount)
    .map((type) => {
      return `${ingredientsCount[type]} ${LABEL[type]}`;
    })
    .join(', ');
  const createdDate = new Date(createdAt);
  return (
    <article className={classes.OrderCard}>
      <Flex column className={`${classes.Info} gap-1-2`}>
        <p>
          Ingredients: <span>{ingredientsString}</span>
        </p>
        <p>
          Price: <strong>{price}$</strong>
        </p>
        <p>Created at: {createdDate.toDateString()}</p>
        <Link className="red-link" to={orderId}>
          More details
        </Link>
      </Flex>
      <QRImage
        className={classes.QRWarper}
        content={`${document.location.origin}/orders/${orderId}`}
      />
    </article>
  );
};

export default OrderCard;
