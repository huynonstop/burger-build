import { useCallback, useState } from 'react';
import { BASE_URL } from '../config/naming';

const useFetch = (initData = null) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(initData);
  const fetchData = async (url, { dataMapper, ...options } = {}) => {
    setLoading(true);
    let fetchedData = null;
    try {
      const res = await fetch(`${BASE_URL}/${url}`, options);
      const resData = await res.json();
      fetchedData = dataMapper ? dataMapper(resData) : resData;
      setData(fetchedData);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
    return fetchedData;
  };
  return [data, fetchData, { loading, error }];
};
export default useFetch;
