'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store';

export const useEmptyCartRedirect = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const isLoaded = useCartStore((state) => state.isLoaded);

  useEffect(() => {
    // this prevents the redirection from happening when the store is loading
    if (isLoaded && cart.length === 0) {
      router.replace('/carrito-vacio');
    }
  }, [cart, isLoaded, router]);

  return cart.length === 0;
};
