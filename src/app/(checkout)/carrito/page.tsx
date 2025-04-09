'use client';

import { ResumenCard, CarritoCard } from './ui';
import { CheckoutLayout } from '@/components/ui';
import { useEmptyCartRedirect } from '@/hooks/useEmptyCartRedirect';

const Carrito = () => {
  const isEmpty = useEmptyCartRedirect();

  if (isEmpty) {
    return null;
  }

  const contentLeft = <CarritoCard />;
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
