import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  address: {
    email: string;
    firstName: string;
    familyName: string;
    address: string;
    zipCode: string;
    city: string;
    phone: string;
    province: string;
    clerkId: string;
  };
  // Methods
  setAddress: (address: State['address']) => void;
  clearAddress: () => void;
}

const initialState = {
  email: '',
  firstName: '',
  familyName: '',
  address: '',
  zipCode: '',
  city: '',
  phone: '',
  province: '',
  clerkId: '',
};

export const useAddressStore = create<State>()(
  persist(
    (set) => ({
      address: initialState,
      setAddress: (address) => set({ address }),
      clearAddress: () => set({ address: initialState }),
    }),
    {
      name: 'shipping-address',
    }
  )
);
