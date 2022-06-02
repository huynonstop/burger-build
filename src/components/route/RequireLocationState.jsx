import { Navigate, useLocation } from 'react-router-dom';

const RequireLocationState = ({ children, to, condition }) => {
  const location = useLocation();
  const locationState = location.state || {};
  if (condition(locationState)) {
    return children;
  }
  return <Navigate to={to} replace />;
};

export default RequireLocationState;
