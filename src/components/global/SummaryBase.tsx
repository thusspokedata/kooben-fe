'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store';
import Link from 'next/link';
import { Button, Text, Flex, useMantineTheme, Box, LoadingOverlay, Modal } from '@mantine/core';
import { currencyFormat } from '@/utils';
import { useUser } from '@clerk/nextjs';
import { useDisclosure } from '@mantine/hooks';
import { useRouter, usePathname } from 'next/navigation';

interface ResumenRowProps {
  label: string;
  value: string | number;
  isBold?: boolean;
}

const ResumenRow: React.FC<ResumenRowProps> = ({ label, value, isBold = false }) => {
  const theme = useMantineTheme();
  return (
    <Flex justify="space-between" w="100%" px="xl">
      <Text fw={isBold ? 500 : 300} fz={theme.fontSizes['2xl']} c={isBold ? 'brand.8' : 'brand.7'}>
        {label}
      </Text>
      <Text fw={isBold ? 500 : 300} fz={theme.fontSizes['2xl']} c={isBold ? 'brand.8' : 'brand.7'}>
        {value}
      </Text>
    </Flex>
  );
};

interface SummaryProps {
  nextPage: string;
  children?: React.ReactNode;
}

export const SummaryBase = ({ nextPage, children }: SummaryProps) => {
  const [mounted, setMounted] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const getSummaryInformation = useCartStore((state) => state.getSummaryInformation);
  const summary = getSummaryInformation();
  const cart = useCartStore((state) => state.cart);
  const [opened, { open, close }] = useDisclosure(false);
  const { isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const isVerificationPage = pathname === '/verificar-compra';

  useEffect(() => {
    setMounted(true);
  }, []);

  const { total, tax, subTotal, itemsInCart } = summary;
  const articles = itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`;

  const handleContinueClick = (e: React.MouseEvent) => {
    if (!isSignedIn) {
      e.preventDefault();
      open();
      return;
    }

    if (isVerificationPage) {
      e.preventDefault();
      setIsPlacingOrder(true);
      // TODO: server action

      const productsToOrder = cart.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
        size: product.size,
        price: product.price,
      }));
      setTimeout(() => {
        router.push('/orden-exitosa');
      }, 1000);
    }
  };

  const handleSignIn = () => {
    close();
    router.push('/sign-in');
  };

  const handleSignUp = () => {
    close();
    router.push('/sign-up');
  };

  return (
    <Flex
      direction="column"
      justify="space-between"
      h="100%"
      w="100%"
      p="0"
      bg="secondary.1"
      style={{ borderRadius: '6px' }}
      pos="relative"
    >
      <LoadingOverlay visible={!mounted} />
      {children}
      <Box pt="lg">
        <ResumenRow label="No. Productos:" value={mounted ? articles : 0} />
      </Box>
      <Box>
        <ResumenRow label="Subtotal:" value={mounted ? `${currencyFormat(subTotal)}` : 0} />
        <ResumenRow label="Impuestos (21%):" value={mounted ? `${currencyFormat(tax)}` : 0} />
      </Box>
      <ResumenRow label="Total:" value={mounted ? `${currencyFormat(total)}` : 0} isBold />

      <Link
        href={nextPage}
        passHref
        style={{ textDecoration: 'none' }}
        onClick={handleContinueClick}
      >
        <Text c="red" ta="start" ml="xs">
          Error de creación
        </Text>
        <Button
          color="blue"
          fullWidth
          mt={2}
          radius="sm"
          size="lg"
          bg="brand.8"
          loading={isPlacingOrder}
          disabled={isPlacingOrder}
        >
          {isVerificationPage ? 'Colocar Orden' : 'Continuar'}
        </Button>
      </Link>

      <Modal opened={opened} onClose={close} title="Inicio de sesión requerido" centered>
        <Text mb="lg">
          Para continuar con tu compra, es necesario iniciar sesión o registrarse.
        </Text>
        <Flex gap="md" justify="center">
          <Button onClick={handleSignIn} variant="outline" color="brand">
            Iniciar Sesión
          </Button>
          <Button onClick={handleSignUp} color="brand">
            Registrarse
          </Button>
        </Flex>
      </Modal>
    </Flex>
  );
};
