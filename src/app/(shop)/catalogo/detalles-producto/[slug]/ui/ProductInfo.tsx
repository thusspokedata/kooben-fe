import { Product } from '@/interfaces';
import { formatPrice } from '@/utils';
import { Flex, Title, Text, Divider, Box, useMantineTheme, Button, Select } from '@mantine/core';
import AddToCart from './AddToCart';

export const ProductInfo = ({ product }: { product: Product }) => {
  const theme = useMantineTheme();
  return (
    <Flex direction="column" align="start" gap="lg" w="100%" maw={500} my={{ base: theme.spacing['11xl'], md: 0 }}>
      <Title c="brand.8" fw={500} order={1} fz="xl" tt="uppercase">
        {product.title}
      </Title>
      <Text c="brand.8" fw={300} fz="lg">
        {product.description}
      </Text>
      <Text c="brand.8" fw={500} fz={theme.fontSizes['4xl']}>
        ${formatPrice(product.price)}
      </Text>

      <Divider size="md" color="secondary.5" w="100%" />

      <AddToCart product={product} />
    </Flex>
  );
};
