import { useEffect } from 'react';
import { API_URL } from '../config/url';
import Container from '../components/common/Container';
import OrderCard from '../components/order/OrderCard';
import useFetch from '../hooks/useFetch';
import Loader from '../components/nav/Loader';
import Flex from '../components/common/Flex';
import { useAuth } from '../hooks/useAuth';

const OrdersContainer = () => {
  const { auth } = useAuth();
  const [orders, fetchOrders, { loading, error }] = useFetch([]);
  useEffect(() => {
    fetchOrders(
      `users/${auth.user.id}/${API_URL.orders}?auth=${auth.idToken}`,
      {
        dataMapper: (data) => Object.entries(data).reverse(),
      },
    );
  }, []);
  return (
    <Container column className="w-50">
      {loading && <Loader />}
      {orders.length
        ? orders.map(
            ([id, { ingredientsCount, price, createdAt }]) => {
              return (
                <OrderCard
                  key={id}
                  orderId={id}
                  ingredientsCount={ingredientsCount}
                  createdAt={createdAt}
                  price={price}
                />
              );
            },
          )
        : !loading && (
            <Flex tag="p" className="justify-center">
              <strong>Nothing in your eyes</strong>
            </Flex>
          )}
    </Container>
  );
};

export default OrdersContainer;
