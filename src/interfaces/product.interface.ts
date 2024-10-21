export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  images: string[];
  description: string;
  price: number;
  sizes: string[];
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
  // TODO: agregar color
}
