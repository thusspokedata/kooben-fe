import { Box, Flex, SimpleGrid } from '@mantine/core';

export const GeneralInformation = () => {
  return (
    <Flex justify="center" align="center" bg="secondary.0" w="100%" h={313} px={117} py="20">
      <SimpleGrid cols={4}>
        <Box w="274" h="274" bg="white"></Box>
        <Box w="274" h="274" bg="white"></Box>
        <Box w="274" h="274" bg="white"></Box>
        <Box w="274" h="274" bg="white"></Box>
      </SimpleGrid>
    </Flex>
  );
};
