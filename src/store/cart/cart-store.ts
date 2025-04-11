import { create } from 'zustand';
import type { CartProduct } from '@/interfaces';
import { persist } from 'zustand/middleware';

interface State {
  cart: CartProduct[];
  isLoaded: boolean;
  getTotalItems: () => number;
  getSummaryInformation: () => {
    total: number;
    tax: number;
    subTotal: number;
    itemsInCart: number;
  };

  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
  clearCart: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      isLoaded: false,
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      getSummaryInformation: () => {
        const { cart } = get();
        const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
        const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        const tax = subTotal * 0.16;
        const total = subTotal + tax;

        return {
          total,
          tax,
          subTotal,
          itemsInCart,
        };
      },
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        // Check if product exists in cart
        const productInCart = cart.some((item) => item.id === product.id);

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // Update quantity if product exists
        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });

        set({ cart: updatedCart });
      },
      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();

        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity };
          }
          return item;
        });

        set({ cart: updatedCart });
      },
      removeProduct: (product: CartProduct) => {
        const { cart } = get();

        const updatedCart = cart.filter((item) => item.id !== product.id);

        set({ cart: updatedCart });
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: 'shopping-cart',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isLoaded = true;
        }
      },
    }
  )
);
