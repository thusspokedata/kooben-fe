import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  address: {
    email: string;
    name: string;
    address: string;
    zipCode: string;
    city: string;
    phone: string;
    province: string;
    clerkId: string;
  };
  // Methods
  setAddress: (address: State['address']) => void;
}

export const useAddressStore = create<State>()(
  persist(
    (set) => ({
      address: {
        email: '',
        name: '',
        address: '',
        zipCode: '',
        city: '',
        phone: '',
        province: '',
        clerkId: '',
      },
      setAddress: (address) => set({ address }),
    }),
    {
      name: 'address-storage',
    }
  )
);
