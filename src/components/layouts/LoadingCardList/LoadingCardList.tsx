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

const Loading: React.FC<{ children?: ReactNode; page: 'detail' | 'home' }> = ({
  children,
  page,
}) => {
  return (
    <>
      {page === 'home' ? (
        <>
          {children}
          <Card maxW="sm" mt={'60px'} bgColor={'gray.100'} height={400}>
            <CardBody>
              <Skeleton rounded={'lg'} height={'40'}>
                <Image
                  src={''}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </Skeleton>
              <Stack mt="6" spacing="3">
                <Skeleton height={'10'} rounded={'lg'}>
                  <Heading size="md"></Heading>
                </Skeleton>
                <Skeleton height={'5'} rounded={'lg'}>
                  <Text></Text>
                </Skeleton>
              </Stack>
            </CardBody>
          </Card>
        </>
      ) : (
        <Card maxW="sm" mt={'60px'} bgColor={'gray.100'} height={400}>
          <CardBody>
            <Skeleton rounded={'lg'} height={'40'}>
              <Image
                src={''}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
            </Skeleton>
            <Stack mt="6" spacing="3">
              <Skeleton height={'10'} rounded={'lg'}>
                <Heading size="md"></Heading>
              </Skeleton>
              <Skeleton height={'5'} rounded={'lg'}>
                <Text></Text>
              </Skeleton>
            </Stack>
          </CardBody>
        </Card>
      )}
      {children}
    </>
  );
};

export default Loading;
