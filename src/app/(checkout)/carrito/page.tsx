'use client';

import { ResumenCard, CarritoCard } from './ui';
import { CheckoutLayout } from '@/components/ui';
import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Carrito = () => {
  const cart = useCartStore((state) => state.cart);
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/carrito-vacio');
    }
  }, [cart.length, router]);

  if (cart.length === 0) {
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
