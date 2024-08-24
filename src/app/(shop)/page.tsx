'use client';

import { CardsCarousel, Filters } from '@/components';
import { ServiceOverview } from '@/components/home/ServiceOverview';
import { Container, Divider, Flex, Text, useMantineTheme } from '@mantine/core';

export default function Home() {
  const theme = useMantineTheme();
  return (
    <>
      <Container size="lg" p="lg" h="100%">
        <Flex gap="xl" direction="column" h="100%">
          <Filters />

          <Text ta="center" size={theme.fontSizes['10xl']} c="secondary.6" mt="xl" tt="uppercase">
            Lo más vendido
          </Text>

          <CardsCarousel />
          <Divider my={theme.spacing['9xl']} size="lg" color="secondary.5" />
        </Flex>
      </Container>
      <ServiceOverview />
    </>
  );
}
