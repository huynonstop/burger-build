import { Route, Routes } from 'react-router-dom';
import BurgerContainer from './pages/BurgerContainer';
import CheckoutContainer from './pages/CheckoutContainer';
import MainLayout from './components/MainLayout';
import NotFound from './pages/NotFound';
import ContactData from './components/checkout/ContactData';
import OrdersContainer from './pages/OrdersContainer';
import RequireLocationState from './components/route/RequireLocationState';
import CanOrderBurger from './components/route/CanOrderBurger';
import OrderDetailContainer from './pages/OrderDetailContainer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<BurgerContainer />} />
        <Route
          path="check-out"
          element={
            <CanOrderBurger to="/">
              <CheckoutContainer />
            </CanOrderBurger>
          }
        >
          <Route
            path="contact-data"
            element={
              <RequireLocationState
                to="/check-out"
                condition={(locationState) => {
                  return locationState.checkoutContinued;
                }}
              >
                <ContactData />
              </RequireLocationState>
            }
          />
        </Route>
        <Route path="orders" element={<OrdersContainer />} />
        <Route
          path="orders/:orderId"
          element={<OrderDetailContainer />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
