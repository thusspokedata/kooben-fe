import { BestSellersCarousel, Filters, ServiceOverview } from '@/components';
import { ResponsiveContainer } from '@/components/ui';
import { Flex } from '@mantine/core';

export default async function Home() {
  return (
    <>
      <ResponsiveContainer pt="lg" h="100%">
        <Flex direction="column" h="100%">
          <Filters />
          <BestSellersCarousel />
        </Flex>
      </ResponsiveContainer>
      <ServiceOverview />
    </>
  );
}
