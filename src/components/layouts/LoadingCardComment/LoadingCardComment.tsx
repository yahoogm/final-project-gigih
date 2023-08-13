import { Card, CardBody, Box, Heading, Text, Skeleton } from '@chakra-ui/react';

const LoadingCardComment: React.FC = () => {
  return (
    <Skeleton rounded={'lg'}>
      <Card bgColor={'gray.100'} maxW={'335px'} h={'80px'}>
        <CardBody>
          <Box>
            <Heading size="xs" textTransform="uppercase"></Heading>
            <Text pt="2" fontSize="sm"></Text>
          </Box>
        </CardBody>
      </Card>
    </Skeleton>
  );
};

export default LoadingCardComment;
