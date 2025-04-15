export enum Role {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export interface CustomerInfo {
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: Role;
  address?: string;
  zipCode?: string;
  city?: string;
  province?: string;
  phone?: string;
  rememberAddress?: boolean;
}

/**
 * Customer address interface - used both for frontend and backend
 * The structure matches the backend Address entity
 */
export interface CustomerAddress {
  firstName: string;
  lastName: string;
  address: string;
  zipCode: string;
  city: string;
  province: string;
  phone?: string;
  isDefault?: boolean;

  // Backend specific fields (optional in frontend)
  id?: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
