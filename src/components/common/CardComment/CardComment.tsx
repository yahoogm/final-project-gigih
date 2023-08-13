import { Card, CardBody, Box, Heading, Text } from '@chakra-ui/react';

type propsComment = {
  username: string;
  comment: string;
};

const CardComment: React.FC<propsComment> = ({ username, comment }) => {
  return (
    <Card bgColor={'gray.100'} maxW={'335px'}>
      <CardBody>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {username}
          </Heading>
          <Text pt="2" fontSize="sm">
            {comment}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default CardComment;
