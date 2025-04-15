export enum Role {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export interface CustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zipCode: string;
  city: string;
  phone: string;
  province: string;
  rememberAddress?: boolean;
  clerkId: string;
}

/**
 * Customer address interface - used both for frontend and backend
 * The structure matches the backend Address entity
 */
export interface CustomerAddress {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zipCode: string;
  city: string;
  phone: string;
  province: string;
  clerkId: string;
}
