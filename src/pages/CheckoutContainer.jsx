import { toast } from 'react-toastify';
import { BASE_URL, API_URL } from '../config/url';

import Container from '../components/common/Container';
import CheckoutSummary from '../components/checkout/CheckoutSummary';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetIngredients } from '../features/actions';

const CheckoutContainer = ({}) => {
  const price = useSelector((store) => store.price);
  const ingredients = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();
  const resetIngredient = () => {
    dispatch(resetIngredients());
  };
  const navigate = useNavigate();
  const confirmOrder = async (contactData) => {
    const order = {
      ingredients,
      price,
      user: {
        id: 1,
      },
      contactData,
      createdAt: Date.now(),
    };
    const toastId = toast.loading('Sending order data');
    try {
      const res = await fetch(`${BASE_URL}/${API_URL.orders}`, {
        method: 'POST',
        body: JSON.stringify(order),
      });
      if (res.status !== 200) {
        throw new Error();
      }
      const { name } = await res.json();
      toast.update(toastId, {
        render: 'Successfully placed the order 👌',
        isLoading: false,
        type: 'success',
      });
      navigate(`/orders/${name}`, {
        state: {
          to: `/orders/${name}`,
        },
      });
      resetIngredient();
    } catch (err) {
      console.log(err);
      toast.update(toastId, {
        render: 'Something went wrong 🤯',
        isLoading: false,
        type: 'error',
      });
    } finally {
      setTimeout(() => {
        toast.dismiss(toastId);
      }, 2000);
    }
  };
  return (
    <>
      <Container>
        <CheckoutSummary ingredients={ingredients} price={price} />
      </Container>
      <Outlet context={{ confirmOrder }} />
    </>
  );
};

export default CheckoutContainer;
