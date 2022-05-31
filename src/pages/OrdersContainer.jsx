import { useEffect } from 'react';
import { API_URL } from '../config/naming';
import Container from '../components/common/Container';
import OrderCard from '../components/order/OrderCard';
import useFetch from '../hooks/useFetch';
import Loader from '../components/nav/Loader';

const OrdersContainer = () => {
  const [orders, fetchOrders, { loading, error }] = useFetch((data) =>
    Object.entries(data).reverse(),
  );
  useEffect(() => {
    fetchOrders(`${API_URL.orders}`);
  }, []);
  return (
    <Container column className="w-50">
      {loading && <Loader />}
      {orders &&
        orders.map(([id, { ingredients, price }]) => {
          return (
            <OrderCard
              key={id}
              ingredients={ingredients}
              price={price}
            />
          );
        })}
    </Container>
  );
};

export default OrdersContainer;
