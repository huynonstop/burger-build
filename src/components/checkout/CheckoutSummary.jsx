import { useNavigate } from 'react-router-dom';
import Burger from '../burger/Burger';
import Button from '../common/Button';
import classes from './checkout.module.css';
const CheckoutSummary = ({}) => {
  const ingredients = {
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1,
  };
  const navigate = useNavigate();
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Happy burger(ing)!</h1>
      <Burger ingredients={ingredients} />
      <Button color="danger" click={() => navigate(-1)}>
        Create another burger
      </Button>
      <Button color="confirm" click={() => navigate('contact-data')}>
        Continue checkout
      </Button>
    </div>
  );
};

export default CheckoutSummary;
