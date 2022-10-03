import { useEffect, useState } from 'react';
import fetchJson from '../utils/fetchJson';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchJson<T>(url)
      .then(response => {
        setData(response);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
