import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom';

type videoProps = {
  imageThumbnail: string;
  title: string;
  authorName?: string;
  videoId?: string;
  price?: number;
  productId?: string;
  linkProduct?: string;
};

const CardVideo: React.FC<videoProps> = ({
  imageThumbnail,
  title,
  authorName,
  videoId,
  price,
  linkProduct,
}: videoProps) => {
  return (
    <>
      {price ? (
        <Card maxW="80" bgColor={'gray.200'}>
          <ChakraLink
            href={linkProduct}
            isExternal
            sx={{
              textDecoration: 'none',
              '&:hover': { textDecoration: 'none' },
            }}
          >
            <CardBody>
              <Image
                src={imageThumbnail}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="sm">{title}</Heading>
                <Text>{authorName}</Text>
                <Text color="blue.600" fontSize="md">
                  {`Rp. ${price}`}
                </Text>
              </Stack>
            </CardBody>
          </ChakraLink>
        </Card>
      ) : (
        <ChakraLink
          as={ReactRouterLink}
          to={`/detail-video/${videoId}`}
          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}
        >
          <Card maxW="sm" bgColor={'gray.200'} height={400}>
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
          </Card>
        </ChakraLink>
      )}
    </>
  );
};

export default CardVideo;
