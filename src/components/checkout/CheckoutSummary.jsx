import { useNavigate } from 'react-router-dom';
import Burger from '../burger/Burger';
import Button from '../common/Button';
import classes from './checkout.module.css';
const CheckoutSummary = ({ ingredients }) => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate({
      pathname: 'contact-data',
    });
  };
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Happy burger(ing)!</h1>
      <Burger ingredients={ingredients} animate={false} />
      <Button
        color="danger"
        click={() => navigate('/', { replace: true })}
      >
        Create another burger
      </Button>
      <Button color="confirm" click={checkout}>
        Continue checkout
      </Button>
    </div>
  );
};

export default CheckoutSummary;
