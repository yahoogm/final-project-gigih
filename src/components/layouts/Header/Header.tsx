import { Box, Flex, Heading, Spacer, Image } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box
      bgColor="white"
      borderBottom={'2px'}
      borderBottomColor={'gray.100'}
      paddingY={1}
      paddingX={20}
      position="fixed"
      top={0}
      width="100%"
      zIndex={999}
    >
      <Flex alignItems="center">
        <Image
          borderRadius="full"
          boxSize="70px"
          objectFit={'cover'}
          src="/final-project.png"
          alt="Tokopeduli Play"
        />
        <Heading size="md" color="black">
          Tokopeduli Play
        </Heading>
        <Spacer />
      </Flex>
    </Box>
  );
};

export default Header;
