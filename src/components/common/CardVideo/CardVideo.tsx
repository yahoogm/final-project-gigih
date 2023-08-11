import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom';

type videoProps = {
  imageThumbnail: string;
  title: string;
  authorName: string;
  videoID: string;
};

const CardVideo = ({
  imageThumbnail,
  title,
  authorName,
  videoID,
}: videoProps): JSX.Element => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imageThumbnail}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{authorName}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          <ChakraLink as={ReactRouterLink} to={`/detail-video/${videoID}`}>
            Detail
          </ChakraLink>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardVideo;
