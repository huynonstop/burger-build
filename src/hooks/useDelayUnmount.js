import { useEffect, useState } from 'react';

export const useDelayUnmount = (show, timeout) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    let timeoutId = null;
    if (show) {
      setRender(true);
    } else {
      timeoutId = setTimeout(() => setRender(false), timeout);
    }
    return () => clearTimeout(timeoutId);
  }, [show]);

  return shouldRender;
};
