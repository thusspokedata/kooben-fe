import { Flex, Button, Text } from '@mantine/core';

export const QuantitySelector = ({
  quantity,
  onQuantityChanged,
  maxQuantity = Number.MAX_SAFE_INTEGER, // Default to a high number if not specified
}: {
  quantity: number;
  onQuantityChanged: (quantity: number) => void;
  maxQuantity?: number;
}) => {
  const onValueChanged = (value: number) => {
    // Prevent going below 1
    if (quantity + value < 1) return;

    // Prevent exceeding the max quantity (stock)
    if (maxQuantity !== undefined && quantity + value > maxQuantity) {
      return;
    }

    onQuantityChanged(quantity + value);
  };

  return (
    <Flex direction="row" gap="xl" align="center">
      <Button
        variant="transparent"
        color="brand.8"
        size="lg"
        onClick={() => onValueChanged(-1)}
        disabled={quantity <= 1}
      >
        -
      </Button>
      <Text>{quantity}</Text>
      <Button
        variant="transparent"
        color="brand.8"
        size="lg"
        onClick={() => onValueChanged(1)}
        disabled={maxQuantity !== undefined && quantity >= maxQuantity}
      >
        +
      </Button>
    </Flex>
  );
};
