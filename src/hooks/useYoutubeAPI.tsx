import axios from 'axios';
import { useEffect, useState } from 'react';

export const useYoutubeAPI = (idVideo: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idVideo) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${idVideo}`
        );
        if (response.status === 400 || response.status === 404) {
          throw new Error(`HTTP Error status: ${response.status}`);
        }

        const json = await response.data;

        setData(json);
        setLoading(false);
        setError(null);
      } catch (error) {
        throw (error as Error).message;
      }
    };

    fetchData();
  }, [idVideo]);

  return { data, loading, error };
};
