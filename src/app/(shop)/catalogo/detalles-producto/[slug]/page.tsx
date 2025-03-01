'use client';

import { ProductCarousel } from './ui/ProductCarousel';
import { useGetProductBySlug } from '@/hooks';
import { Flex } from '@mantine/core';
import { ProductInfo } from './ui/ProductInfo';
import ProductDetailSkeleton from './ui/ProductDetailSkeleton';
import { ResponsiveContainer } from '@/components/ui';

interface ProductDetailPageProps {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = params;

  const { data: product, isLoading, isError, error } = useGetProductBySlug({ slug });

  if (isLoading) return <ProductDetailSkeleton />;

  if (isError) return <div>Error: {error && error.message}</div>;

  return (
    <ResponsiveContainer
      h="100%"
      style={{ minHeight: '100vh' }}
    >
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
        <ProductCarousel product={product} />
        <ProductInfo product={product} />
      </Flex>
    </ResponsiveContainer>
  );
}
