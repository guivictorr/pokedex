import { useCallback, useEffect, useState } from 'react';
import fetchJson from '../utils/fetchJson';

type IUseFetch<T> = {
  result: T | null;
  loading: boolean;
  error: boolean;
};

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<IUseFetch<T>>({
    result: null,
    loading: true,
    error: false,
  });

  const getData = useCallback(async () => {
    try {
      const response = await fetchJson<T>(url);
      setData({ result: response, loading: true, error: false });
    } catch (error) {
      setData(prevState => ({ ...prevState, error: true }));
      console.error('useFetch Error -> ', error);
    } finally {
      setData(prevState => ({ ...prevState, loading: false }));
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default useFetch;
