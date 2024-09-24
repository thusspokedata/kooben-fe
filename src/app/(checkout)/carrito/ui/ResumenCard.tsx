'use client';

import { Button, Text, Flex, useMantineTheme, Box } from '@mantine/core';
import Link from 'next/link';

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
  return (
    <Flex
      direction="column"
      justify="space-between"
      h="100%"
      w="100%"
      p="0"
      bg="secondary.1"
      style={{ borderRadius: '6px' }}
    >
      <Box pt="lg">
        <ResumenRow label="No. Productos:" value="2" />
      </Box>
      <Box>
        <ResumenRow label="Subtotal:" value="$200" />
        <ResumenRow label="Impuestos (21%):" value="$200" />
      </Box>
      <ResumenRow label="Total:" value="$200" isBold />
      <Link href={nextPage} passHref style={{ textDecoration: 'none' }}>
        <Button color="blue" fullWidth mt="md" radius="sm" size="lg" bg="brand.8">
          Continuar
        </Button>
      </Link>
    </Flex>
  );
};
