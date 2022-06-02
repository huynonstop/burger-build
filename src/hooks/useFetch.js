import { useState } from 'react';
import { BASE_URL } from '../config/url';

const useFetch = (initData = null, baseUrl = true) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(initData);
  const fetchData = async (url, { dataMapper, ...options } = {}) => {
    setLoading(true);
    let fetchedData = null;
    try {
      const fetchUrl = baseUrl ? `${BASE_URL}/${url}` : url;
      const res = await fetch(fetchUrl, options);
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
