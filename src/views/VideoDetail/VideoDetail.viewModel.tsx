import { useFormik } from 'formik';
import axios from 'axios';
import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { useToast } from '@chakra-ui/react';
import { useYoutubeAPI } from '../../hooks/useYoutubeAPI';

type routeParams = {
  videoId: string;
};

export type responseComment = {
  username: string;
  video_id: string;
  comment: string;
};

const useVideoDetailModel = () => {
  const { videoId } = useParams<routeParams>();

  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useProducts(videoId || 'kcnwI_5nKyA');
  const {
    data: videos,
    loading: videosLoading,
    error: videosError,
  } = useYoutubeAPI(videoId || '');

  const [commentAdditionCount, setCommentAdditionCount] = useState<number>(0);
  const [comments, setComment] = useState<Array<responseComment>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const toast = useToast();

  const handleSubmitComment = useCallback(
    async (username: string, comment: string) => {
      try {
        const response = await axios.post('http://localhost:3000/comments', {
          video_id: videoId,
          username,
          userComment: comment,
        });

        if (response.status === 400 || response.status === 404) {
          throw new Error(`Http error status: ${response.status}`);
        }

        const responseData = await response.data;
        const commentData: responseComment = await responseData.data;
        setCommentAdditionCount((prevCount) => prevCount + 1);
        toast({
          title: `${commentData.username} berhasil menambahkan comment`,
        });
      } catch (error) {
        return (error as Error).message;
      }
    },
    [toast, videoId]
  );

  useEffect(() => {
    if (!videoId) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/comments', {
          params: {
            id: videoId,
          },
        });
        if (response.status === 400 || response.status === 404) {
          throw new Error(`HTTP Error status: ${response.status}`);
        }

        const json = await response.data.data;

        setComment(json);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        throw (error as Error).message;
      }
    };

    fetchData();
  }, [videoId, commentAdditionCount]);

  const addCommentSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Please input your username'),
    comment: Yup.string()
      .min(5, 'Too Short!')
      .max(250, 'Too Long!')
      .required('Please input your comment'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      comment: '',
    },
    onSubmit: (values) => {
      handleSubmitComment(values.username, values.comment);

      formik.resetForm();
    },
    validationSchema: addCommentSchema,
  });
  return {
    formik,
    products,
    productsLoading,
    comments,
    loading,
    error,
    videoId,
    videos,
    productsError,
    videosLoading,
    videosError,
  };
};

export default useVideoDetailModel;
