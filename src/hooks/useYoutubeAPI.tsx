import axios from 'axios';
import { useEffect, useState } from 'react';

type responseDataYoutubeAPI = {
  title: string;
  author_name: string;
  author_url: string;
  type: string;
  height: number;
  width: number;
  html: string;
  version: string;
  provider_name: string;
  provider_url: string;
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail_url: string;
};

type responseYoutubeAPI = {
  data: responseDataYoutubeAPI;
  loading: boolean;
  error: null | string;
};

export const useYoutubeAPI = (idVideo: string): responseYoutubeAPI => {
  const [data, setData] = useState<responseDataYoutubeAPI | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

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

  return { data: data!, loading, error };
};
