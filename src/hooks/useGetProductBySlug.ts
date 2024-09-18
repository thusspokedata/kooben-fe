import { getProductBySlug } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useGetProductBySlug = ({ slug }: { slug: string }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProductBySlug(slug),
    staleTime: 1000 * 60 * 60,
  });
  console.log({ data });
  return { data, isLoading, isError, error };
};
