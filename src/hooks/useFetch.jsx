import { useState, useEffect } from "react";
const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url, { ...options });
      const json = await response.json();

      setData(json);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error };
};

export default useFetch;
