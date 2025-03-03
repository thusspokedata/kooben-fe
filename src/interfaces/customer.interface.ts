export interface CustomerInfo {
  clerkId: string;
  name: string;
  email: string;
  address: string;
  zipCode: string;
  city: string;
  province: string;
  phone?: string;
  rememberAddress?: boolean;
}

export interface CustomerAddress {
  address: string;
  zipCode: string;
  city: string;
  province: string;
  phone?: string;
}
