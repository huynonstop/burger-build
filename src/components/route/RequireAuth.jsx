import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const RequireAuth = ({ children, to = '/auth' }) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to={to} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;
