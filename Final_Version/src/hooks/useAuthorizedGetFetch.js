import { useEffect, useState } from "react";
import httpClient from '../http-common';
const useAuthorizedGetFetch = (url, config) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await httpClient.get(url, config);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url ]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await httpClient.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useAuthorizedGetFetch;