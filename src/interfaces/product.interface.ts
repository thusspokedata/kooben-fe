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
}

export interface ProductSize {
  id?: string;
  size: string;
  stock: number;
  productId?: string;
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
  size: string;
  image: string;
  description: string;
  color?: string;
  colorName?: string;
}
