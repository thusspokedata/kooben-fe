'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store';
import Link from 'next/link';
import { Button, Text, Flex, useMantineTheme, Box, LoadingOverlay } from '@mantine/core';
import { currencyFormat } from '@/utils';

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

export const ResumenCard = ({ nextPage }: { nextPage: string }) => {
  const [mounted, setMounted] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const getSummaryInformation = useCartStore((state) => state.getSummaryInformation);
  const summary = getSummaryInformation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { total, tax, subTotal, itemsInCart } = summary;
  const articles = itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`;

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
      <Box pt="lg">
        <ResumenRow label="No. Productos:" value={mounted ? articles : 0} />
      </Box>
      <Box>
        <ResumenRow label="Subtotal:" value={mounted ? `${currencyFormat(subTotal)}` : 0} />
        <ResumenRow label="Impuestos (21%):" value={mounted ? `${currencyFormat(tax)}` : 0} />
      </Box>
      <ResumenRow label="Total:" value={mounted ? `${currencyFormat(total)}` : 0} isBold />
      <Link href={nextPage} passHref style={{ textDecoration: 'none' }}>
        <Button color="blue" fullWidth mt="md" radius="sm" size="lg" bg="brand.8">
          Continuar
        </Button>
      </Link>
    </Flex>
  );
};
