'use client';

import { CardsCarousel, Filters } from '@/components';
import { Box, Container, Divider, Flex, Text, useMantineTheme } from '@mantine/core';

export default function Home() {
  const theme = useMantineTheme();
  return (
    <Container size="lg" p="lg" h="100%">
      <Flex gap="xl" direction="column" h="100%">
        <Filters />

        <Text ta="center" size={theme.fontSizes['10xl']} c="#52796F" mt="xl" tt="uppercase">
          Lo más vendido
        </Text>

        <CardsCarousel />
        <Divider my="xl" size="lg" color="#52796F" />
      </Flex>
    </Container>
  );
}
