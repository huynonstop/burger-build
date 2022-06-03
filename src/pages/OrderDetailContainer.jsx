import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Burger from '../components/burger/Burger';
import BurgerInfo from '../components/burger/info/BurgerInfo';
import Container from '../components/common/Container';
import QRImage from '../components/common/QRImage';
import Loader from '../components/nav/Loader';
import ContactInfo from '../components/order/ContactInfo';
import { API_URL } from '../config/url';
import { useAuth } from '../hooks/useAuth';
import useFetch from '../hooks/useFetch';

const OrderDetailContainer = () => {
  const [order, fetchOrder, { loading }] = useFetch();
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    fetchOrder(
      `users/${auth.user.id}/${API_URL.orderId(orderId)}/?auth=${
        auth.idToken
      }`,
    )
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
          <Container>
            <Link className="red-link" to="/orders">
              Back to orders
            </Link>
          </Container>
          <Container className="justify-evenly flex-warp">
            <ContactInfo {...order.contactData} />
            <BurgerInfo
              ingredientsGroupClass="items-start"
              ingredients={order.ingredients}
              price={order.price}
            />
          </Container>
          <Container className="p-block-0-important">
            <p>
              <strong>Created at: </strong>
              {new Date(order.createdAt).toDateString()}
              {', '}
              {new Date(order.createdAt).toLocaleTimeString()}
            </p>
          </Container>
          <Container className="items-center" column>
            <h1>Happy burger(ing)!</h1>
            <Burger
              className="h-full-important"
              animate={false}
              ingredients={order.ingredients}
            />
          </Container>
          <Container column className="w-40 items-center">
            <QRImage
              tooltipPosition="Center"
              clipboardDescription
              className="max-w-200px"
              content={`${document.location.href}`}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default OrderDetailContainer;
