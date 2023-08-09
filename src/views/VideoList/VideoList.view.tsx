import { Grid } from '@chakra-ui/react';
import CardVideo from '../../components/common/CardVideo/CardVideo';
import { useFetch } from '../../hooks/useFetch';

const VideList = (): JSX.Element => {
  const data = useFetch('http://localhost:3000/videos');

  console.log(data);

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <CardVideo />
      <CardVideo />
      <CardVideo />
      <CardVideo />
      <CardVideo />
    </Grid>
  );
};

export default VideList;
