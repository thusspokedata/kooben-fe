'use client';

import { BestSellersCarousel, Filters, ServiceOverview } from '@/components';
import { ResponsiveContainer } from '@/components/ui';
import { Flex } from '@mantine/core';

export default function HomePage() {
  // Main content only - sync happens automatically in the provider
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
