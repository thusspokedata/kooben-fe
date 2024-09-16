'use client';

import { useSearchParams } from 'next/navigation';
import { CardCatalogo } from '@/components';
import { useProducts } from '@/hooks/useProducts';
import type { Product } from '@/interfaces';
import { CategoryKey, CATEGORIES } from '@/utils';
import { Container, SimpleGrid, Text } from '@mantine/core';

const CatalogClient = () => {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as CategoryKey) || 'mesa_de_luz';

  const { products, isLoading } = useProducts();

  if (isLoading) return <div>Cargando...</div>;

  // Group products by category
  const groupedProducts = products.reduce((acc: { [key: string]: Product[] }, product: Product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  // Order categories by initialCategory
  const sortedCategories = Object.keys(groupedProducts).sort((a, b) => {
    if (a === initialCategory) return -1;
    if (b === initialCategory) return 1;
    return 0;
  });

  return (
    <Container size="lg" h="100%" p="lg" style={{ minHeight: '100vh' }}>
      {sortedCategories.map((categoryKey) => (
        <div key={categoryKey}>
          <Text ta="start" fw={500} size="xl" mt="xl" mb="lg" c="brand.8" tt="uppercase">
            {CATEGORIES[categoryKey as CategoryKey]}
          </Text>

          <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }} spacing="xl">
            {groupedProducts[categoryKey].map((product: Product) => (
              <CardCatalogo key={product.id} product={product} />
            ))}
          </SimpleGrid>
        </div>
      ))}
    </Container>
  );
};

export default CatalogClient;
