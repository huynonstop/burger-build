import { useEffect, useRef } from 'react';

export const useIsReRender = () => {
  const isRerender = useRef(false);
  useEffect(() => {
    isRerender.current = true;
    return () => {
      isRerender.current = false;
    };
  }, []);

  const getter = () => {
    return isRerender.current;
  };
  return getter;
};
