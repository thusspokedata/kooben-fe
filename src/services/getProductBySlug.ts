import { api } from '@/api';

export const getProductBySlug = async (slug: string) => {
  const response = await api.get(`/products/${slug}`);
  console.log("getProductBySlug",response.data);
  return response.data;
};
