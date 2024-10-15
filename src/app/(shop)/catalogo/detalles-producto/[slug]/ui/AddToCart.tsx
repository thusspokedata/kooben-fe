'use client';

import { Product } from '@/interfaces';
import { theme } from '@/themes/mantine-theme';
import { Flex, Box, Select, Button, Text } from '@mantine/core';
import { useState } from 'react';

interface Size {
  sizes: string[];
}

interface SizeSelectorProps {
  selectedSize?: string;
  availableSizes: string[];

  onSizeChanged: (size: string) => void;
}

const SizeSelector = ({ selectedSize, availableSizes, onSizeChanged }: SizeSelectorProps) => {
  return (
    <Select
      label="Medidas:"
      placeholder="Elige la medida"
      data={availableSizes}
      value={selectedSize}
      onChange={(value) => {
        onSizeChanged(value || '');
      }}
      allowDeselect
    />
  );
};

const QuantitySelector = ({
  quantity,
  onQuantityChanged,
}: {
  quantity: number;
  onQuantityChanged: (quantity: number) => void;
}) => {
  const onValueChanged = (value: number) => {
    if (quantity + value < 1) return;
    onQuantityChanged(quantity + value);
  };

  return (
    <Flex direction="row" gap="xl" align="center">
      <Button variant="transparent" color="brand.8" onClick={() => onValueChanged(-1)}>
        -
      </Button>
      <Text>{quantity}</Text>
      <Button variant="transparent" color="brand.8" onClick={() => onValueChanged(1)}>
        +
      </Button>
    </Flex>
  );
};

export default function AddToCart({ product }: { product: Product }) {
  const [color, setColor] = useState();
  const [size, setSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Box w="100%">
      <Flex direction="row" justify="space-between" align="start" gap="xs" w="100%">
        <Box>
          <Text>Color:</Text>
          <Text>Blanco</Text>
          <Text>Madera</Text>
          <Text>Negro</Text>
        </Box>
        <SizeSelector selectedSize={size} availableSizes={product.sizes} onSizeChanged={setSize} />
      </Flex>
      <Flex direction="row" justify="space-between" align="center" gap="xs" w="100%" mt={theme.spacing['11xl']}>
        <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />
        <Button color="brand.8" px={40}>
          Agregar al carrito
        </Button>
      </Flex>
    </Box>
  );
}
