import { Grid, Stack } from '@chakra-ui/react';
import CardVideo from '../../components/common/CardVideo/CardVideo';
import { useFetch } from '../../hooks/useFetch';

const VideList = (): JSX.Element => {
  const { data, loading, error } = useFetch('http://localhost:3000/videos');

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>Error</h1>;

  type responseVideo = {
    image_thumbnail: string;
    video_id: string;
    title: string;
    author_name: string;
  };

  return (
    <Stack padding={'4'}>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        {data.map((video: responseVideo) => {
          return (
            <CardVideo
              imageThumbnail={video.image_thumbnail}
              title={video.title}
              key={video.video_id}
              authorName={video.author_name}
              videoId={video.video_id}
            />
          );
        })}
      </Grid>
    </Stack>
  );
};

export default VideList;
