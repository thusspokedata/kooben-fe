export interface CustomerInfo {
  email: string;
  name: string;
  clerkId: string;
  address?: string;
  zipCode?: string;
  city?: string;
  province?: string;
  phone?: string;
  rememberAddress?: boolean;
}

export interface CustomerAddress {
  address: string;
  zipCode: string;
  city: string;
  province: string;
  isDefault?: boolean;
}
