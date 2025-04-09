'use client';

import { CheckoutLayout } from '@/components/ui';
import { ProductsInCart } from './ui';
import { OrderSummary } from './ui/OrderSummary';
import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const OrderVerification = () => {
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

  const contentLeft = <ProductsInCart />;
  const contentRight = <OrderSummary nextPage="/verificar-compra" />;

  return (
    <CheckoutLayout title="Detalles Pedido" contentLeft={contentLeft} contentRight={contentRight} />
  );
};

export default OrderVerification;
