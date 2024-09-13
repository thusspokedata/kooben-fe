'use client';

import { CardCatalogo } from '@/components';
import { fetchProductsByCategory } from '@/services';
import { Container, SimpleGrid, Text } from '@mantine/core';
import { useEffect, useState } from 'react';

type Product = {
  id: string;
  title: string;
  images: string[];
  description: string;
  price: number;
};

const Catalogo = ({ category = 'mesa_de_luz' }: { category: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProductsByCategory({ category });
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
      }
    };

    getProducts();
  }, [category]);

  if (error) return <div>{error}</div>;
  return (
    <Container size="lg" h="100%" p="lg" style={{ minHeight: '100vh' }}>
      <Text ta="center" size="xl" mt="xl" style={{ zIndex: 1000 }}>
        Catalogo
      </Text>
      <SimpleGrid cols={4}>
        {products &&
          products.map((product) => (
            <CardCatalogo
              key={product.id}
              images={product.images}
              title={product.title}
              description={product.description}
              price={0}
            />
          ))}
      </SimpleGrid>
    </Container>
  );
};

export default Catalogo;
