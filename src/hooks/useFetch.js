import { useState } from 'react';
import { BASE_URL } from '../config/naming';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async (url, options) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/${url}`, options);
      const resData = await res.json();
      setData(resData);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return [data, { loading, error, fetchData }];
};
export default useFetch;
