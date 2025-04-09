import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useEmptyCartRedirect = () => {
  const cart = useCartStore((state) => state.cart);
  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push('/carrito-vacio');
    }
  }, [cart.length, router]);

  return cart.length === 0;
};
