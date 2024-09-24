import { ResumenCard } from '../carrito/ui';
import { CheckoutLayout } from '@/components/ui';
import { EditarCompra } from './ui';

const DetallesDeEntrega = () => {
  const contentLeft = <EditarCompra />;
  const contentRight = <ResumenCard nextPage="/verificar-compra" />;

  return <CheckoutLayout title="Datos Cliente" contentLeft={contentLeft} contentRight={contentRight} />;
};

export default DetallesDeEntrega;
