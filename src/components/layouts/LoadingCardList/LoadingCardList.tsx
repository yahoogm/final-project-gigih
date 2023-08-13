import {
  Skeleton,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const Loading: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <Skeleton mt={'60px'} rounded={'lg'}>
        <Card maxW="sm" bgColor={'gray.100'} height={400}>
          <CardBody>
            <Image
              src={''}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{''}</Heading>
              <Text>{''}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Skeleton>
    </>
  );
};

export default Loading;
