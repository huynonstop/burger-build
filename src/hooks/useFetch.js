import { useCallback, useState } from 'react';
import { BASE_URL } from '../config/naming';

const useFetch = (dataMapper) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = async (url, options) => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/${url}`, options);
      const resData = await res.json();
      setData(dataMapper ? dataMapper(resData) : resData);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };
  return [data, fetchData, { loading, error }];
};
export default useFetch;
