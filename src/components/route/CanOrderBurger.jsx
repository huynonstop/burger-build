import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const CanOrderBurger = ({ children, to }) => {
  const ingredients = useSelector((state) => state.ingredients);
  const price = useSelector((state) => state.price);
  const countIngredients = Object.keys(ingredients).reduce(
    (pre, type) => pre + ingredients[type],
    0,
  );
  const isSafe = useRef(false);
  useEffect(() => {
    isSafe.current = true;
  }, []);

  if (isSafe.current || (countIngredients && price)) {
    return children;
  }
  return <Navigate to={locationState.to || to} replace />;
};

export default CanOrderBurger;
