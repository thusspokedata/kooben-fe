'use client';

// export const revalidate = 60 * 60 * 24 * 7; // 1 week
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductCarousel } from './ui/ProductCarousel';
import { useGetProductBySlug } from '@/hooks';
import { Container, Flex } from '@mantine/core';
import { ProductInfo } from './ui/ProductInfo';

type Props = {
  params: { slug: string };
};

export default function ProductDetailPage({ params }: Props) {
  const { slug } = params;

  const { data: product, isLoading, isError, error } = useGetProductBySlug({ slug });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error && error.message}</div>;

  return (
    <Container size="lg" h="100%" p="lg" style={{ minHeight: '100vh' }}>
      <Flex gap="xl">
        <ProductCarousel product={product} />
        <ProductInfo product={product} />
      </Flex>
    </Container>
  );
}
