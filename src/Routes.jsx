import { Route, Routes } from 'react-router-dom';
import BurgerContainer from './pages/BurgerContainer';
import CheckoutContainer from './pages/CheckoutContainer';
import MainLayout from './components/MainLayout';
import NotFound from './pages/NotFound';
import ContactData from './components/checkout/ContactData';
import OrdersContainer from './pages/OrdersContainer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<BurgerContainer />} />
        <Route path="check-out" element={<CheckoutContainer />}>
          <Route path="contact-data" element={<ContactData />} />
        </Route>
        <Route path="orders" element={<OrdersContainer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
