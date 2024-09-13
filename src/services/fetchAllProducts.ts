import { api } from '@/api';

interface FetchAllProductsProps {
  limit?: number;
  offset?: number;
}

export const fetchAllProducts = async ({ limit = 10, offset = 0 }: FetchAllProductsProps) => {
  try {
    const response = await api.get(`/products`, {
      params: {
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
