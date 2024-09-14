// import { useEffect, useState } from 'react';
// import { fetchAllProducts } from '@/services';
// import type { Product } from '@/interfaces';

// export const useProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const data = await fetchAllProducts({});
//         setProducts(data);
//       } catch (error) {
//         setError('Failed to fetch products');
//       }
//     };

//     getProducts();
//   }, []);

//   return { products, error };
// };

import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts } from '@/services';

export const useProducts = () => {
  const {
    isLoading,
    isError,
    error,
    data: products = [],
    isFetching,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchAllProducts({}),
    staleTime: 1000 * 60 * 5,
  });

  return { isLoading, isError, error, products, isFetching };
};
