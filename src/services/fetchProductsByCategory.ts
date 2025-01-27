import { api } from '@/api';

interface FetchProductsByCategoryProps {
  category: string;
  limit?: number;
  offset?: number;
}

export const fetchProductsByCategory = async ({
  category,
  limit = 10,
  offset = 0,
}: FetchProductsByCategoryProps) => {
  try {
    const response = await api.get(`/products`, {
      params: {
        category,
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
