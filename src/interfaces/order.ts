export interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  productId: string;
  size: string;
}

export interface OrderAddress {
  id: string;
  firstName: string;
  familyName: string;
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
  items: OrderItem[];
  shippingAddress: OrderAddress;
}

export interface CreateOrderRequest {
  total: number;
  items: {
    quantity: number;
    price: number;
    productId: string;
    size: string;
  }[];
  shippingAddress: {
    firstName: string;
    familyName: string;
    address: string;
    address2?: string;
    postalCode: string;
    city: string;
    country: string;
    phone: string;
  };
}
