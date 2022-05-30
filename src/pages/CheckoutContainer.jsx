import { toast } from 'react-toastify';
import { BASE_URL, API_URL } from '../config/naming';

import Container from '../components/common/Container';
import CheckoutSummary from '../components/checkout/CheckoutSummary';
import {
  Outlet,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const CheckoutContainer = ({}) => {
  const [searchParams] = useSearchParams();
  const { price, ...ingredients } = Object.fromEntries([
    ...searchParams,
  ]);
  const navigate = useNavigate();
  const confirmOrder = async (contactData) => {
    console.log('confirm');
    const order = {
      ingredients,
      price,
      user: {
        id: 1,
      },
      contactData,
    };
    const toastId = toast.loading('Sending order data');
    try {
      const res = await fetch(`${BASE_URL}/${API_URL.orders}`, {
        method: 'POST',
        body: JSON.stringify(order),
      });
      console.log(res);
      if (res.status !== 200) {
        throw new Error();
      }
      toast.update(toastId, {
        render: 'Successfully placed the order 👌',
        isLoading: false,
        type: 'success',
      });
      navigate('/');
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
      <Container>
        <Outlet context={{ confirmOrder }} />
      </Container>
    </>
  );
};

export default CheckoutContainer;
