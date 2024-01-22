/**
 * 📄FileName   : useFetch.ts
 * ⏱CreateDate : 2024/01/20 09:57:56
 * 🧑Author     : master
 * 👆Version    : 1.0
 * 💭Description: fetch wrapper hook
 */

import { useEffect, useState } from 'react';

export interface IuseFetchProps {
  url: RequestInfo;
  options?: RequestInit;
}

function useFetch(props: IuseFetchProps) {
  const { url, options } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState<any>();

  const fetchData = async (url: RequestInfo, options?: RequestInit) => {
    // 请求前启动遮罩层
    setLoading(true);
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setError('');
      } else {
        setError(response.statusText);
        setData(undefined);
        console.error("fetch url '" + url + "' error: " + response.statusText);
      }
    } catch (error) {
      setError(error);
      setData(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url, options);
  }, [url]);

  return { loading, data, error };
}

export default useFetch;
