export interface CustomerInfo {
  email: string;
  name: string;
  address: string;
  zipCode: string;
  city: string;
  phone: string;
  province: string;
  rememberAddress: boolean;
  clerkId?: string; // ID del usuario en Clerk
}

export interface CustomerAddress {
  address: string;
  zipCode: string;
  city: string;
  province: string;
  isDefault?: boolean;
}
