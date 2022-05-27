import { useEffect, useState } from 'react';

export const useDelayUnmount = (show, timeout) => {
  const [isMount, setMount] = useState(show);

  useEffect(() => {
    let timeoutId = null;
    if (show) {
      setMount(true);
    } else if (!show) {
      timeoutId = setTimeout(() => setMount(false), timeout);
    }
    return () => clearTimeout(timeoutId);
  }, [show, timeout]);

  return isMount;
};
