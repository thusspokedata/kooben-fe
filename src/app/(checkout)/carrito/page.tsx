'use client';

import { Stack } from '@mantine/core';
import { ResumenCard, CarritoCard } from './ui';
import { CheckoutLayout } from '@/components/ui';

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

  const contentLeft = (
    <Stack gap="lg">
      <CarritoCard product={product} />
      <CarritoCard product={product} />
      <CarritoCard product={product} />
    </Stack>
  );

  const contentRight = <ResumenCard nextPage="/detalles-de-entrega" />;

  return (
    <CheckoutLayout
      title="Carrito"
      subtitle="Los productos de la cesta de la compra no están reservados"
      contentLeft={contentLeft}
      contentRight={contentRight}
    />
  );
};

export default Carrito;
