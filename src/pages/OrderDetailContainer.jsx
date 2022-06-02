import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Burger from '../components/burger/Burger';
import BurgerInfo from '../components/burger/info/BurgerInfo';
import Container from '../components/common/Container';
import Loader from '../components/nav/Loader';
import ContactInfo from '../components/order/ContactInfo';
import { API_URL } from '../config/naming';
import useFetch from '../hooks/useFetch';

const OrderDetailContainer = () => {
  const [order, fetchOrder, { loading }] = useFetch();
  const { orderId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchOrder(`${API_URL.orderId(orderId)}`)
      .then((fetchedData) => {
        if (!fetchedData) navigate('/orders', { replace: true });
      })
      .catch(() => {
        navigate('/orders', { replace: true });
      });
  }, []);
  return (
    <>
      {loading && (
        <Container>
          <Loader />
        </Container>
      )}
      {order && (
        <>
          <Container className="justify-evenly flex-warp">
            <ContactInfo {...order.contactData} />
            <BurgerInfo
              ingredientsGroupClass="items-start"
              ingredients={order.ingredients}
              price={order.price}
            />
            <Burger
              className="h-full-important"
              animate={false}
              ingredients={order.ingredients}
            />
          </Container>
          <Container>
            <p>
              <strong>Created at: </strong>
              {new Date(order.createdAt).toDateString()}
              {', '}
              {new Date(order.createdAt).toLocaleTimeString()}
            </p>
          </Container>
        </>
      )}
    </>
  );
};

export default OrderDetailContainer;
