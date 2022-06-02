import { useLocation, useNavigate } from 'react-router-dom';
import Burger from '../burger/Burger';
import BurgerInfo from '../burger/info/BurgerInfo';
import Button from '../common/Button';
import classes from './checkout.module.css';
const CheckoutSummary = ({ ingredients, price }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state || {};
  const checkout = () => {
    navigate('contact-data', {
      state: {
        checkoutContinued: true,
      },
    });
  };
  const createBurger = () => {
    navigate('/', { replace: true });
  };
  return (
    <div className={classes.CheckoutSummary}>
      <Burger ingredients={ingredients} animate={false} />
      <BurgerInfo ingredients={ingredients} price={price} />
      {!locationState.checkoutContinued && (
        <Button color="confirm" click={checkout}>
          Continue checkout
        </Button>
      )}
      <Button color="danger" click={createBurger}>
        Create another burger
      </Button>
    </div>
  );
};

export default CheckoutSummary;
