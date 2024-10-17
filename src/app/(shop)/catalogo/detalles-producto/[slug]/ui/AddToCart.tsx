'use client';

import { QuantitySelector, SizeSelector } from '@/components';
import { CartProduct, Product } from '@/interfaces';
import { useCartStore } from '@/store';
import { theme } from '@/themes/mantine-theme';
import { Flex, Box, Button, Text } from '@mantine/core';
import { useState } from 'react';


export default function AddToCart({ product }: { product: Product }) {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const [color, setColor] = useState();
  const [size, setSize] = useState<string | undefined>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);
    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      description: product.description,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize('');
  };

  return (
    <Box w="100%">
      <Flex direction="row" justify="space-between" align="start" gap="xs" w="100%">
        <Box>
          <Text>Color:</Text>
          <Text>Blanco</Text>
          <Text>Madera</Text>
          <Text>Negro</Text>
        </Box>
        <Box>
          <SizeSelector selectedSize={size} availableSizes={product.sizes} onSizeChanged={setSize} />
          {posted && !size && <Text c="red">Selecciona una medida</Text>}
        </Box>
      </Flex>
      <Flex direction="row" justify="space-between" align="center" gap="xs" w="100%" mt={theme.spacing['11xl']}>
        <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />
        <Button color="brand.8" px={40} onClick={addToCart}>
          Agregar al carrito
        </Button>
      </Flex>
    </Box>
  );
}
