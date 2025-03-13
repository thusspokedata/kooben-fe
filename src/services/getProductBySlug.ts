import { api } from '@/api';
import { Product } from '@/interfaces';

export const getProductBySlug = async (slug: string): Promise<Product> => {
  try {
    const response = await api.get(`/products/${slug}`);

    // Extract the data from the response
    const data = response.data as Product;

    return data;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    throw error;
  }
};
