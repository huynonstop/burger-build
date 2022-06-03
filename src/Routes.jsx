import { Route, Routes } from 'react-router-dom';
import BurgerContainer from './pages/BurgerContainer';
import CheckoutContainer from './pages/CheckoutContainer';
import MainLayout from './components/MainLayout';
import NotFound from './pages/NotFound';
import OrdersContainer from './pages/OrdersContainer';
import RequireLocationState from './components/route/RequireLocationState';
import CanOrderBurger from './components/route/CanOrderBurger';
import OrderDetailContainer from './pages/OrderDetailContainer';
import ContactContainer from './pages/ContactContainer';
import AuthContainer from './pages/AuthContainer';
import RequireUnAuth from './components/route/RequireUnAuth';
import RequireAuth from './components/route/RequireAuth';

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
                <ContactContainer />
              </RequireLocationState>
            }
          />
        </Route>
        <Route
          path="orders"
          element={
            <RequireAuth>
              <OrdersContainer />
            </RequireAuth>
          }
        />
        <Route
          path="orders/:orderId"
          element={
            <RequireAuth>
              <OrderDetailContainer />
            </RequireAuth>
          }
        />
        <Route
          path="auth"
          element={
            <RequireUnAuth>
              <AuthContainer />
            </RequireUnAuth>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
