'use client';

// export const revalidate = 60 * 60 * 24 * 7; // 1 week
// import type { Metadata, ResolvingMetadata } from 'next';
// import { notFound } from 'next/navigation';
import { ProductCarousel } from './ui/ProductCarousel';
import { useGetProductBySlug } from '@/hooks';
import { Container, Flex } from '@mantine/core';
import { ProductInfo } from './ui/ProductInfo';
import ProductDetailSkeleton from './ui/ProductDetailSkeleton';

interface ProductDetailPageProps {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = params;

  const { data: product, isLoading, isError, error } = useGetProductBySlug({ slug });

  if (isLoading) return <ProductDetailSkeleton />;

  if (isError) return <div>Error: {error && error.message}</div>;

  return (
    <Container
      size="responsive"
      px={{ base: '20px', xs: '40px', lg: '120' }}
      h="100%"
      style={{ minHeight: '100vh' }}
    >
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
        <ProductCarousel product={product} />
        <ProductInfo product={product} />
      </Flex>
    </Container>
  );
}
