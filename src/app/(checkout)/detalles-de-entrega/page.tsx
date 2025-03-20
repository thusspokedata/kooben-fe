import { ResumenCard } from '../carrito/ui';
import { CustomerInfo } from './ui';
import { CheckoutLayout } from '@/components/ui';

const DeliveryDetails = () => {
  const contentLeft = <CustomerInfo />;
  const contentRight = <ResumenCard nextPage="/verificar-compra" />;

  return (
    <CheckoutLayout title="Datos Pedido" contentLeft={contentLeft} contentRight={contentRight} />
  );
};

export default DeliveryDetails;
