import { useEffect, useState } from "react";
import httpClient from '../http-common';
const usePostFetch = (url,body) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await httpClient.post(url, body || {});
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url ]);

  const reFetch = async (newBody) => {
    setLoading(true);
    try {
      const res = await httpClient.post(url, newBody || {});
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default usePostFetch;