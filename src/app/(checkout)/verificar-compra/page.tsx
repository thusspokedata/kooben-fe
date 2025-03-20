import { CheckoutLayout } from '@/components/ui';
import { ProductsInCart } from './ui';
import { OrderSummary } from './ui/OrderSummary';

const OrderVerification = () => {
  const contentLeft = <ProductsInCart />;
  const contentRight = <OrderSummary nextPage="/verificar-compra" />;

  return (
    <CheckoutLayout title="Detalles Pedido" contentLeft={contentLeft} contentRight={contentRight} />
  );
};

export default OrderVerification;
