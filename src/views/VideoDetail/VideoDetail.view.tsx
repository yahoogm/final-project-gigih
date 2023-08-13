import {
  Center,
  Grid,
  GridItem,
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  Box,
  Textarea,
  Text,
  Flex,
} from '@chakra-ui/react';
import EmbedVideo from '../../components/common/EmbedVideo/EmbedVideo';

import CardVideo from '../../components/common/CardVideo/CardVideo';
import useVideoDetailModel from './VideoDetail.viewModel';
import { responseComment } from './VideoDetail.viewModel';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {
  Error,
  LoadingCardList,
  LoadingCardComment,
} from '../../components/layouts';
import { CardComment } from '../../components/common';

type productResponse = {
  title: string;
  price: number;
  thumbnail_url: string;
  link_product: string;
  product_id: string;
};

const VideoDetail: React.FC = () => {
  const model = useVideoDetailModel();

  return (
    <Grid
      templateColumns="repeat(8, 1fr)"
      minH={'100vh'}
      placeItems={'center'}
      bgColor={'white'}
    >
      <GridItem
        colSpan={2}
        bgColor={'gray.50'}
        width={'full'}
        overflowX={'hidden'}
        overflowY={'scroll'}
        h={'100vh'}
        padding={4}
      >
        <Center>
          <Grid templateColumns={'repeat(1, 1fr)'} gap={4}>
            {!model.productsLoading ? (
              model.products.length === 0 ? (
                <Flex h={'96vh'}>
                  <Center>
                    <Text>No products yet</Text>
                  </Center>
                </Flex>
              ) : model.productsError ? (
                <Error />
              ) : (
                model.products.map((product: productResponse) => {
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
              )
            ) : (
              <LoadingCardList />
            )}
          </Grid>
        </Center>
      </GridItem>

      <GridItem position={'relative'} colSpan={4}>
        {model.videosLoading ? (
          <p>loading</p>
        ) : (
          <>
            <Link to={'/'}>
              <Flex align={'center'}>
                <ArrowBackIcon
                  w={6}
                  h={6}
                  color={'black'}
                  mt={'-32'}
                  mr={'10px'}
                />
                <Text mt={'-32'}>{model.videos?.author_name}</Text>
              </Flex>
            </Link>
            <EmbedVideo videoId={model.videoId || 'kcnwI_5nKyA'} />
          </>
        )}
      </GridItem>

      <GridItem bg={'white'} colSpan={2} minH={'100vh'} width={'full'}>
        <Grid
          templateColumns={'repeat(1, 1fr)'}
          templateRows={'repeat(3, 1fr)'}
          minH={'100vh'}
        >
          <GridItem
            rowSpan={2}
            bgColor={'gray.50'}
            overflowX={'hidden'}
            overflowY={'scroll'}
            maxH={'66.6vh'}
            padding={4}
          >
            <Grid templateColumns={'repeat(1, 1fr)'} gap={4}>
              <Text>Comments</Text>
              {!model.loading ? (
                model.comments.length === 0 ? (
                  <Flex h={'57vh'} justifyContent={'center'}>
                    <Center>
                      <Text>No comments yet</Text>
                    </Center>
                  </Flex>
                ) : model.error ? (
                  <Error />
                ) : (
                  model.comments.map(
                    (comment: responseComment, idx: number) => {
                      return (
                        <GridItem key={idx.toString()}>
                          <CardComment
                            comment={comment.comment}
                            username={comment.username}
                          />
                        </GridItem>
                      );
                    }
                  )
                )
              ) : (
                <>
                  <LoadingCardComment />
                  <LoadingCardComment />
                  <LoadingCardComment />
                  <LoadingCardComment />
                  <LoadingCardComment />
                  <LoadingCardComment />
                </>
              )}
            </Grid>
          </GridItem>

          <GridItem
            rowSpan={1}
            bgColor={'gray.50'}
            overflowX={'hidden'}
            overflowY={'scroll'}
            padding={4}
            maxH={'33.2vh'}
          >
            <Text mb={4}>Insert your comment</Text>
            <form onSubmit={model.formik.handleSubmit}>
              <FormControl
                isInvalid={
                  !!model.formik.errors.username &&
                  model.formik.touched.username
                }
              >
                <Box marginBottom={2}>
                  <Input
                    placeholder="insert your username"
                    id="username"
                    name="username"
                    type="text"
                    onChange={model.formik.handleChange}
                    value={model.formik.values.username}
                    variant={'filled'}
                  />
                  <FormErrorMessage>
                    {model.formik.errors.username}
                  </FormErrorMessage>
                </Box>
              </FormControl>

              <FormControl
                isInvalid={
                  !!model.formik.errors.comment && model.formik.touched.comment
                }
              >
                <Box>
                  <Textarea
                    placeholder="insert your comments"
                    size={'sm'}
                    id="comment"
                    name="comment"
                    variant={'filled'}
                    onChange={model.formik.handleChange}
                    value={model.formik.values.comment}
                  ></Textarea>
                  <FormErrorMessage>
                    {model.formik.errors.comment}
                  </FormErrorMessage>
                </Box>
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
