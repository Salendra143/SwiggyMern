import { apiLink } from "./Constants";
import { useState, useEffect } from 'react';


 export const useFetchApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiLink);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
            setData(json.data)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};



