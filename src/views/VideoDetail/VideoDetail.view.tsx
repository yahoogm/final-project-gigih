import { Center, Grid, GridItem } from '@chakra-ui/react';
import EmbedVideo from '../../components/common/EmbedVideo/EmbedVideo';

const VideoDetail = (): JSX.Element => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" minH={'100vh'} placeItems={'center'}>
      <GridItem colSpan={1} bgColor={'bisque'} minH={'100vh'} width={'full'}>
        <Center>
          <h1>makan</h1>
        </Center>
      </GridItem>

      <GridItem position={'relative'} colSpan={2} bgColor={'blue'}>
        <Center>
          <EmbedVideo />
        </Center>
      </GridItem>

      <GridItem bg={'aqua'} colSpan={1} minH={'100vh'} width={'full'}>
        <Center>
          <h1>contoh</h1>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default VideoDetail;
