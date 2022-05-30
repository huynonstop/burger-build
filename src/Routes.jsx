import { Route, Routes } from 'react-router-dom';
import BurgerContainer from './pages/BurgerContainer';
import CheckoutContainer from './pages/CheckoutContainer';
import MainLayout from './components/MainLayout';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<BurgerContainer />} />
        <Route path="check-out" element={<CheckoutContainer />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
