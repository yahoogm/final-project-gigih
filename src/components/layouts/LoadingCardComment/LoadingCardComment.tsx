import { Card, CardBody, Box, Heading, Text, Skeleton } from '@chakra-ui/react';

const LoadingCardComment: React.FC = () => {
  return (
    <Card bgColor={'gray.100'} maxW={'335px'} h={'80px'}>
      <CardBody>
        <Box>
          <Skeleton rounded={'lg'} height={'4'}>
            <Heading size="xs" textTransform="uppercase"></Heading>
          </Skeleton>

          <Skeleton rounded={'lg'} height={'4'} mt={'2'}>
            <Text pt="2" fontSize="sm"></Text>
          </Skeleton>
        </Box>
      </CardBody>
    </Card>
  );
};

export default LoadingCardComment;
