import { Flex, Button, Text } from "@mantine/core";

export const QuantitySelector = ({
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
        <Button variant="transparent" color="brand.8" size="lg" onClick={() => onValueChanged(-1)}>
          -
        </Button>
        <Text>{quantity}</Text>
        <Button variant="transparent" color="brand.8" size="lg" onClick={() => onValueChanged(1)}>
          +
        </Button>
      </Flex>
    );
  };