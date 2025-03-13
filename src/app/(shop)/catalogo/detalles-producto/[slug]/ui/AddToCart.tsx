'use client';

import { QuantitySelector, SizeSelector } from '@/components';
import { ColorSelector } from '@/components/global/ColorSelector';
import { CartProduct, Product } from '@/interfaces';
import { useCartStore } from '@/store';
import { theme } from '@/themes/mantine-theme';
import { Flex, Box, Button, Text } from '@mantine/core';
import { useState } from 'react';

export default function AddToCart({ product }: { product: Product }): JSX.Element {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const [size, setSize] = useState<string | undefined>('');
  const [color, setColor] = useState<string | undefined>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  // Function to get the available stock for the selected size
  const getSelectedSizeStock = (): number => {
    if (!size || !product.productSizes) return 0;
    const selectedSizeInfo = product.productSizes.find((sizeInfo) => sizeInfo.size === size);
    return selectedSizeInfo?.stock || 0;
  };

  // Calculate available stock
  const availableStock = getSelectedSizeStock();

  // Extract sizes for the selector component
  const availableSizes = product.productSizes ? product.productSizes.map((s) => s.size) : [];

  // Extract colors for the selector component
  const availableColors = product.colors || [];

  const addToCart = () => {
    setPosted(true);
    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      description: product.description || '',
      quantity: quantity,
      size: size,
      image: product.images[0],
      color: color,
    };

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize('');
    setColor('');
  };

  return (
    <Box w="100%">
      <Flex direction="row" justify="space-between" gap="md" w="100%">
        {/* Color selector - only if colors are available */}
        {availableColors.length > 0 && (
          <Box>
            <ColorSelector
              selectedColor={color}
              availableColors={availableColors}
              onColorChanged={setColor}
            />
            {posted && !color && <Text c="red">Select a color</Text>}
          </Box>
        )}

        {/* Size selector - only if sizes are available */}
        {availableSizes.length > 0 && (
          <Box>
            <SizeSelector
              selectedSize={size}
              availableSizes={availableSizes}
              productSizes={product.productSizes}
              onSizeChanged={setSize}
            />
            {posted && !size && <Text c="red">Select a size</Text>}
            {/* Stock information */}
            {size && (
              <Text size="sm" mt="xs" ml={4}>
                Available stock: {availableStock} units
              </Text>
            )}
          </Box>
        )}
      </Flex>

      <Flex
        direction="row"
        justify="space-between"
        align="center"
        gap="xs"
        w="100%"
        mt={theme.spacing['11xl']}
      >
        <QuantitySelector
          quantity={quantity}
          onQuantityChanged={setQuantity}
          maxQuantity={availableStock} // Limit quantity to available stock
        />
        <Button
          color="brand.8"
          px={40}
          onClick={addToCart}
          disabled={!size || (availableColors.length > 0 && !color) || availableStock <= 0}
        >
          Agregar al carrito
        </Button>
      </Flex>
    </Box>
  );
}
