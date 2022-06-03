import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useIsReRender } from '../../hooks/useIsReRender';

const CanOrderBurger = ({ children, to }) => {
  const ingredients = useSelector((state) => state.ingredients);
  const price = useSelector((state) => state.price);
  const countIngredients = Object.keys(ingredients).reduce(
    (pre, type) => pre + ingredients[type],
    0,
  );
  const getIsReRender = useIsReRender();
  const isCanOrder = countIngredients && price;
  if (!getIsReRender() && !isCanOrder) {
    return <Navigate to={locationState.to || to} replace />;
  }
  return children;
};

export default CanOrderBurger;
