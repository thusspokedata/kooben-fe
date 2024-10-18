import { ResumenCard, CarritoCard } from './ui';
import { CheckoutLayout } from '@/components/ui';

const Carrito = () => {

  const contentLeft = <CarritoCard />;

  const contentRight = <ResumenCard nextPage="/detalles-de-entrega" />;

  return (
    <CheckoutLayout
      title="Carrito"
      subtitle="Los productos de la cesta de la compra no están reservados"
      contentLeft={contentLeft}
      contentRight={contentRight}
    />
  );
};

export default Carrito;
