import {
  Center,
  Grid,
  GridItem,
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  FormLabel,
  Box,
  Textarea,
  useToast,
  CardBody,
  Heading,
  Text,
  Card,
} from '@chakra-ui/react';
import EmbedVideo from '../../components/common/EmbedVideo/EmbedVideo';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import CardVideo from '../../components/common/CardVideo/CardVideo';
import { useFormik } from 'formik';
import axios from 'axios';
import { useCallback } from 'react';
import { useState, useEffect } from 'react';

type routeParams = {
  videoId: string;
};

type productResponse = {
  title: string;
  price: number;
  thumbnail_url: string;
  link_product: string;
  product_id: string;
};

type responseComment = {
  username: string;
  video_id: string;
  comment: string;
};

const VideoDetail = (): JSX.Element => {
  const { videoId } = useParams<routeParams>();

  const { data: products, loading: productsLoading } = useProducts(
    videoId || 'kcnwI_5nKyA'
  );

  const [commentAdditionCount, setCommentAdditionCount] = useState<number>(0);
  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        throw (error as Error).message;
      }
    };

    fetchData();
  }, [videoId, commentAdditionCount]);

  console.log(error);

  const formik = useFormik({
    initialValues: {
      username: '',
      comment: '',
    },
    onSubmit: (values) => {
      handleSubmitComment(values.username, values.comment);

      formik.resetForm();
    },
  });

  if (!videoId && loading) return <div>Loading</div>;
  if (videoId === undefined) return <div>Video error</div>;

  return (
    <Grid templateColumns="repeat(8, 1fr)" minH={'100vh'} placeItems={'center'}>
      <GridItem
        colSpan={2}
        bgColor={'bisque'}
        width={'full'}
        overflowX={'hidden'}
        overflowY={'scroll'}
        maxH={'100vh'}
        padding={4}
      >
        <Center>
          <Grid templateColumns={'repeat(1, 1fr)'} gap={4}>
            {!productsLoading ? (
              products.map((product: productResponse) => {
                return (
                  <CardVideo
                    key={product.product_id}
                    title={product.title}
                    imageThumbnail={product.thumbnail_url}
                    price={product.price}
                    linkProduct={product.link_product}
                  />
                );
              })
            ) : (
              <p>loading</p>
            )}
          </Grid>
        </Center>
      </GridItem>

      <GridItem position={'relative'} colSpan={4}>
        {!videoId ? <p>loading</p> : <EmbedVideo videoId={videoId} />}
      </GridItem>

      <GridItem bg={'aqua'} colSpan={2} minH={'100vh'} width={'full'}>
        <Grid
          templateColumns={'repeat(1, 1fr)'}
          templateRows={'repeat(3, 1fr)'}
          minH={'100vh'}
        >
          <GridItem
            rowSpan={2}
            bgColor={'blanchedalmond'}
            overflowX={'hidden'}
            overflowY={'scroll'}
            maxH={'66.6vh'}
            padding={4}
          >
            <Grid templateColumns={'repeat(1, 1fr)'} gap={4}>
              {comments.map((comment: responseComment, idx: number) => {
                return (
                  <GridItem key={idx.toString()}>
                    <Card>
                      <CardBody>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            {comment.username}
                          </Heading>
                          <Text pt="2" fontSize="sm">
                            {comment.comment}
                          </Text>
                        </Box>
                      </CardBody>
                    </Card>
                  </GridItem>
                );
              })}
            </Grid>
          </GridItem>

          <GridItem
            rowSpan={1}
            bgColor={'white'}
            overflowX={'hidden'}
            overflowY={'scroll'}
            padding={4}
            maxH={'33.2vh'}
          >
            <form onSubmit={formik.handleSubmit}>
              <FormControl isRequired>
                <Box marginBottom={4}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    placeholder="insert your username"
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    variant={'filled'}
                  />
                </Box>

                <Box>
                  <FormLabel>Comment</FormLabel>
                  <Textarea
                    placeholder="insert your comments"
                    size={'sm'}
                    id="comment"
                    name="comment"
                    variant={'filled'}
                    onChange={formik.handleChange}
                    value={formik.values.comment}
                  ></Textarea>
                </Box>

                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <Button mt={4} colorScheme="teal" type="submit" width={'full'}>
                Submit
              </Button>
            </form>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default VideoDetail;
