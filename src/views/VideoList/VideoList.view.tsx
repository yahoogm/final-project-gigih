import { Grid, Stack } from '@chakra-ui/react';
import { CardVideo } from '../../components/common';
import { useFetch } from '../../hooks/useFetch';
import { Error, Header, LoadingCardList } from '../../components/layouts';
import API_URL from '../../config/api/api';

const VideoList: React.FC = () => {
  const { data, loading, error } = useFetch(
    `${API_URL}/videos` || 'http://localhost:3000/videos'
  );

  if (loading)
    return (
      <>
        <Header />
        <Stack paddingX={'20'} paddingY={8}>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <LoadingCardList />
            <LoadingCardList />
            <LoadingCardList />
            <LoadingCardList />
            <LoadingCardList />
            <LoadingCardList />
            <LoadingCardList />
            <LoadingCardList />
          </Grid>
        </Stack>
      </>
    );
  if (error) return <Error />;

  type responseVideo = {
    image_thumbnail: string;
    video_id: string;
    title: string;
    author_name: string;
  };

  return (
    <>
      <Header />
      <Stack paddingX={'20'} paddingY={8} marginTop={'60px'}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {data?.map((video: responseVideo) => {
            return (
              <CardVideo
                imageThumbnail={video?.image_thumbnail}
                title={video?.title}
                key={video?.video_id}
                authorName={video?.author_name}
                videoId={video?.video_id}
              />
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default VideoList;
