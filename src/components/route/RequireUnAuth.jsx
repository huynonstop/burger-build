import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useIsReRender } from '../../hooks/useIsReRender';

const RequireUnAuth = ({ children, to = '/' }) => {
  const { isAuth } = useAuth();

  const getIsReRender = useIsReRender();

  if (!getIsReRender() && isAuth) {
    return <Navigate to={to} replace></Navigate>;
  }
  return children;
};

export default RequireUnAuth;
