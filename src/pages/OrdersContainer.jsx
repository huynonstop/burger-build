import { useEffect } from 'react';
import { API_URL } from '../config/naming';
import Container from '../components/common/Container';
import OrderCard from '../components/order/OrderCard';
import useFetch from '../hooks/useFetch';
import Loader from '../components/nav/Loader';
import Flex from '../components/common/Flex';

const OrdersContainer = () => {
  const [orders, fetchOrders, { loading, error }] = useFetch([]);
  useEffect(() => {
    fetchOrders(`${API_URL.orders}`, {
      dataMapper: (data) => Object.entries(data).reverse(),
    });
  }, []);
  return (
    <Container column className="w-50">
      {loading && <Loader />}
      {orders.length
        ? orders.map(([id, { ingredients, price, createdAt }]) => {
            return (
              <OrderCard
                key={id}
                orderId={id}
                ingredients={ingredients}
                createdAt={createdAt}
                price={price}
              />
            );
          })
        : !loading && (
            <Flex tag="p" className="justify-center">
              <strong>Nothing in your eyes</strong>
            </Flex>
          )}
    </Container>
  );
};

export default OrdersContainer;
