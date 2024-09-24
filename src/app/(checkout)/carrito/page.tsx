'use client';

import { useState } from 'react';
import { Box, Container, Flex, Text, Title } from '@mantine/core';
import ImagePlaceholder from '@/components/global/ImagePlaceHolder';
import { ResumenCard, CarritoCard } from './ui';

const Carrito = () => {
  const product = {
    id: '1',
    category: 'Cama',
    sizes: ['S', 'M', 'L'],
    images: [],
    title: 'Cama Moderna de Madera',
    description:
      'Una cama de madera elegante y duradera, perfecta para cualquier habitación. Disponible en varios tamaños.',
    price: 499.99,
    slug: 'cama-moderna-madera',
  };
  const hasImages = product?.images && product.images.length > 0;
  const [displayImage, setDisplayImage] = useState(hasImages ? product.images[0] : { ImagePlaceholder });
  const { images, title, description, price, slug } = product;
  return (
    <Container size="lg" h="100%" p="lg" style={{ minHeight: '100vh' }}>
      <Flex direction="row" gap="lg" justify="space-between">
        <Flex direction="column" gap="xs">
          <Title order={1} c="brand.8" fz={24} fw={500}>
            Carrito
          </Title>
          <Text c="brand.8" fz="lg" fw={300}>
            Los productos de la cesta de la compra no están reservados
          </Text>
          <Box mt="xl">
            <CarritoCard product={product} />
          </Box>
        </Flex>

        <Flex direction="column" align="end" gap="xs" w="100%">
          <Title order={1} c="brand.8" fz={24} fw={500} mb="xl" ta="start" w="80%" pl="sm">
            Resumen
          </Title>

          <Box mt="xl" w="80%" h="100%" ta="end">
            <ResumenCard />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Carrito;
