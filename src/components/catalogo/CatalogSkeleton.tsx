'use client';

import { SimpleGrid, Skeleton, Box, Card, Flex, AspectRatio } from '@mantine/core';
import { ResponsiveContainer } from '../ui';

// Skeleton card component for catalog items
function CardCatalogoSkeleton() {
  return (
    <Card shadow="sm">
      <Card.Section>
        <AspectRatio ratio={4 / 3}>
          <Skeleton height="100%" width="100%" animate={true} />
        </AspectRatio>
      </Card.Section>
      <Flex direction="column" justify="space-between" gap="xs" h="100%">
        <Box>
          <Skeleton height={24} mt="md" width="70%" animate={true} />
          <Skeleton height={20} mt="xs" width="90%" animate={true} />
        </Box>
        <Skeleton height={32} mt="xs" width="40%" animate={true} />
      </Flex>
    </Card>
  );
}

// Skeleton for a category section
function CategorySkeleton({ itemCount = 4 }: { itemCount?: number }) {
  return (
    <div>
      <Skeleton height={28} width="30%" mb="lg" animate={true} />

      <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }} spacing="xl">
        {Array.from({ length: itemCount }).map((_, index) => (
          <CardCatalogoSkeleton key={index} />
        ))}
      </SimpleGrid>
    </div>
  );
}

// Main catalog skeleton component
const CatalogSkeleton = ({ categoryCount = 3 }: { categoryCount?: number }) => {
  return (
    <ResponsiveContainer h="100%" style={{ minHeight: '100vh' }}>
      {Array.from({ length: categoryCount }).map((_, index) => (
        <CategorySkeleton
          key={index}
          itemCount={index === 0 ? 4 : 3} // First category has more items
        />
      ))}
    </ResponsiveContainer>
  );
};

export default CatalogSkeleton;
