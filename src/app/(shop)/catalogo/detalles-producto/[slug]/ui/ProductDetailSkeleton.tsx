'use client';

import { ResponsiveContainer } from '@/components/ui';
import { Flex, Skeleton, Box, AspectRatio, Stack, Group } from '@mantine/core';

// Skeleton for the product carousel
function ProductCarouselSkeleton() {
  return (
    <Box w={{ base: '100%', md: '50%' }} pr={{ md: 'xl' }}>
      <AspectRatio ratio={1} mb="md">
        <Skeleton height="100%" width="100%" animate={true} radius="md" />
      </AspectRatio>

      <Group gap="xs" mt="md">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} height={80} width={80} animate={true} radius="md" />
        ))}
      </Group>
    </Box>
  );
}

// Skeleton for the product info
function ProductInfoSkeleton() {
  return (
    <Box w={{ base: '100%', md: '50%' }} mt={{ base: 'xl', md: 0 }} pl={{ md: 'xl' }}>
      <Skeleton height={36} width="80%" animate={true} mb="md" />
      <Skeleton height={24} width="60%" animate={true} mb="xl" />

      <Skeleton height={32} width="40%" animate={true} mb="xl" />

      <Stack gap="md" mb="xl">
        <Skeleton height={20} width="90%" animate={true} />
        <Skeleton height={20} width="85%" animate={true} />
        <Skeleton height={20} width="70%" animate={true} />
      </Stack>

      <Group gap="md" mt="xl">
        <Skeleton height={50} width={120} animate={true} radius="xl" />
        <Skeleton height={50} width={120} animate={true} radius="xl" />
      </Group>
    </Box>
  );
}

// Main product detail skeleton component
export default function ProductDetailSkeleton() {
  return (
    <ResponsiveContainer h="100%" style={{ minHeight: '100vh' }}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
        <ProductCarouselSkeleton />
        <ProductInfoSkeleton />
      </Flex>
    </ResponsiveContainer>
  );
}
