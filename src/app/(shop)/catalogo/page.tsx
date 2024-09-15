


// const CatalogClient = dynamic(() => import('@/components/catalogo/CatalogClient'), {
//   ssr: false, // Ensure this component runs only on the client
// });

import CatalogClient from "@/components/catalogo/CatalogClient";

export default function CatalogPage() {
  return <CatalogClient />;
}
