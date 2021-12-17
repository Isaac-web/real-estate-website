import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bgColor={"gray.200"} marginTop={"10"} alignItems={"center"}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
        p="5"
      >
        <Text color="gray.500">Thanks For Your Visit</Text>
        <Text color="gray.500">Isaac Takiy 😉</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
