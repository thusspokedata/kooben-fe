import { ResumenCard } from '../carrito/ui';
import { CustomerInfo } from './ui';
import { CheckoutLayout } from '@/components/ui';

const DetallesDeEntrega = () => {
  const contentLeft = <CustomerInfo />;
  const contentRight = <ResumenCard nextPage="/verificar-compra" />;

  return (
    <CheckoutLayout title="Datos Cliente / Dirección de entrega" contentLeft={contentLeft} contentRight={contentRight} />
  );
};

export default DetallesDeEntrega;
