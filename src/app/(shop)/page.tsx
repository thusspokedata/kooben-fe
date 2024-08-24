'use client';

import { CardsCarousel, Filters } from '@/components';
import { ServiceOverview } from '@/components/home/ServiceOverview';
import { Container, Divider, Box, Flex, Text, useMantineTheme } from '@mantine/core';

export default function Home() {
  const theme = useMantineTheme();

  return (
    <>
      <Container size="lg" px="lg" pt="lg" h="100%">
        <Flex direction="column" h="100%">
          <Filters />

          <Box mt={{ base: 40, sm: 80 }}>
            <Text
              ta="center"
              mb={theme.spacing['5xl']}
              fz={{ base: theme.fontSizes['6xl'], sm: theme.fontSizes['10xl'] }}
              c="secondary.6"
              tt="uppercase"
            >
              Lo más vendido
            </Text>
            <CardsCarousel />

            <Divider my={{ base: 40, sm: 82 }} size="lg" color="secondary.5" />
          </Box>
        </Flex>
      </Container>
      <ServiceOverview />
    </>
  );
}
