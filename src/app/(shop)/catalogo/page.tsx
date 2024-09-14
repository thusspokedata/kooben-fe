'use client';

import { CardCatalogo } from '@/components';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/interfaces';
import { formatNumberWithCommas, CategoryKey, CATEGORIES } from '@/utils';
import { Container, SimpleGrid, Text } from '@mantine/core';

const Catalogo = () => {
  const { products, error } = useProducts();

  if (error) return <div>{error}</div>;

  // Group products by category
  const groupedProducts = products.reduce((acc: { [key: string]: Product[] }, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <Container size="lg" h="100%" p="lg" style={{ minHeight: '100vh' }}>
      {Object.keys(groupedProducts).map((categoryKey) => (
        <div key={categoryKey}>
          {/* Render category name */}
          <Text ta="start" fw={500} size="xl" mt="xl" mb="lg" c="brand.8" tt="uppercase">
            {CATEGORIES[categoryKey as CategoryKey]}
          </Text>
          {/* Render products for the current category */}
          <SimpleGrid cols={4} spacing="xl">
            {groupedProducts[categoryKey].map((product) => (
              <CardCatalogo
                key={product.id}
                images={product.images}
                title={product.title}
                description={product.description}
                price={formatNumberWithCommas(product.price)}
              />
            ))}
          </SimpleGrid>
        </div>
      ))}
    </Container>
  );
};

export default Catalogo;
