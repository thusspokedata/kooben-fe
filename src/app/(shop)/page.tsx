import { BestSellersCarousel, Filters, ServiceOverview } from '@/components';
import { Container, Flex } from '@mantine/core';

export default async function Home() {
  return (
    <>
      <Container size="responsive" px={{base:"20px", xs:"40px", lg:"120"}} pt="lg" h="100%">
        <Flex direction="column" h="100%">
          <Filters />
          <BestSellersCarousel />
        </Flex>
      </Container>
      <ServiceOverview />
    </>
  );
}
