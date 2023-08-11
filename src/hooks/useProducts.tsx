import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = (videoId: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!videoId) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/products', {
          params: {
            id: videoId,
          },
        });
        if (response.status === 400 || response.status === 404) {
          throw new Error(`HTTP Error status: ${response.status}`);
        }

        const json = await response.data.data;
        setData(json);
        setLoading(false);
        setError(null);
      } catch (error) {
        throw (error as Error).message;
      }
    };

    fetchData();
  }, [videoId]);

  return { data, loading, error };
};

export default useProducts;
