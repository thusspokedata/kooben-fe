import { BestSellersCarousel, Filters, ServiceOverview } from '@/components';
import { Container, Flex } from '@mantine/core';

export default async function Home() {
  return (
    <>
      <Container size="lg" px="lg" pt="lg" h="100%">
        <Flex direction="column" h="100%">
          <Filters />
          <BestSellersCarousel />
        </Flex>
      </Container>
      <ServiceOverview />
    </>
  );
}
