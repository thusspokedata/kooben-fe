'use client';

import { Grid, Card, SimpleGrid, Skeleton, Box } from '@mantine/core';
import classes from './Filters.module.css';

interface SkeletonCardProps {
  aspectRatio?: string;
}

function SkeletonCard({ aspectRatio = '' }: SkeletonCardProps) {
  return (
    <Card
      radius="sm"
      className={classes.imageContainer}
      style={{
        height: '100%',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
      }}
    >
      <Skeleton height="100%" width="100%" radius="sm" animate={true} />
    </Card>
  );
}

export const FiltersSkeleton = () => {
  return (
    <Box>
      <Grid w="100%" gutter={{ base: 6, xs: 10 }}>
        <Grid.Col span={{ base: 5, xs: 4 }} order={{ base: 2, xs: 1 }}>
          <SkeletonCard aspectRatio="9/16" />
        </Grid.Col>

        <Grid.Col span={{ base: 7, xs: 8 }} order={{ base: 1, xs: 2 }}>
          <SimpleGrid cols={{ base: 1, xs: 2 }} ml={{ xs: 'sm' }} spacing={{ base: 6, xs: 'sm' }}>
            <SkeletonCard aspectRatio="4/3" />
            <SkeletonCard aspectRatio="4/3" />
          </SimpleGrid>

          <SimpleGrid cols={1} mt={16} ml="sm" visibleFrom="xs">
            <SkeletonCard aspectRatio="4/2" />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
      <SimpleGrid cols={1} mt={16} hiddenFrom="xs">
        <SkeletonCard aspectRatio="5/2" />
      </SimpleGrid>
      <SimpleGrid cols={1} mt={16}>
        <SkeletonCard aspectRatio="5/2" />
      </SimpleGrid>
    </Box>
  );
};

export default FiltersSkeleton;
