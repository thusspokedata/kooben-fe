export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface OrderItem {
  id: string;
  quantity: number; // 1-10
  price: number;
  productId: string;
  size: ProductSize;
}

export interface OrderAddress {
  id: string;
  firstName: string; // min 3 chars
  lastName: string; // min 3 chars
  address: string;
  address2?: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
}

export interface PurchaseOrder {
  id: string;
  total: number;
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  items: OrderItem[];
  shippingAddress: OrderAddress;
}

export interface CreateOrderRequest {
  total: number;
  clerkId: string;
  items: {
    quantity: number;
    price: number;
    productId: string;
    size: ProductSize;
  }[];
  shippingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    postalCode: string;
    city: string;
    country: string;
    phone: string;
  };
}
