import { Navigate, useLocation } from 'react-router-dom';

const RequireLocationState = ({ children, to, condition }) => {
  const location = useLocation();
  const locationState = location.state || {};
  if (!condition(locationState)) {
    return <Navigate to={to} replace />;
  }
  return children;
};

export default RequireLocationState;
