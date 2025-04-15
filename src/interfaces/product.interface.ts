import { ProductSize } from "./order.interface";


export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  price: number;
  colors?: string[];
  productSizes?: ProductSize[];
  material?: string | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  tags?: string[];
  inStock: number;
  sizes: ProductSize[];
  gender: 'men' | 'women' | 'kid' | 'unisex';
}

export interface ProductColor {
  id?: string;
  color: string;
  colorName: string;
  colorHex: string;
  stock: number;
  productId?: string;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: ProductSize;
  image: string;
  description: string;
  color?: string;
  colorName?: string;
}
