import type { ProductSize } from './product.interface';

export interface OrderItem {
  id: string;
  quantity: number; // 1-10
  price: number;
  size: ProductSize;
  product: {
    title: string;
    slug: string;
    image: string;
  };
}

export interface Order {
  id: string;
  isPaid: boolean;
  paidAt?: string;
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
  userId: string;
  transactionId?: string;
  status: 'pending' | 'paid' | 'cancelled';
  address: {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    zipCode: string;
    city: string;
    phone: string;
    province: string;
  };
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
