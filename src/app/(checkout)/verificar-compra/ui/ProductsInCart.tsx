'use client';

import { theme } from '@/themes/mantine-theme';
import { Card, Flex, Box, Text, Image, AspectRatio, SimpleGrid } from '@mantine/core';
import ImagePlaceholder from '@/components/global/ImagePlaceHolder';
import { useCartStore } from '@/store';
import Link from 'next/link';
import classes from './ProductsInCart.module.css';
import { currencyFormat } from '../../../../utils/currencyFormat';

export const ProductsInCart = () => {
  const productsInCart = useCartStore((state) => state.cart);

  return (
    <>
      <Link href="/carrito" className={classes['link-hover']}>
        <Text fz="lg" fw={500} mb="md">
          Editar carrito
        </Text>
      </Link>

      {productsInCart.map((product) => (
        <Card
          shadow="0"
          p="lg"
          mah={360}
          radius="sm"
          mb="lg"
          key={`${product.slug}-${product.size}`}
        >
          <SimpleGrid cols={2}>
            {product.image ? (
              <AspectRatio ratio={9 / 16} style={{ maxHeight: '220', margin: 0 }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  style={{ objectFit: 'cover', maxHeight: '220px', margin: 0 }}
                />
              </AspectRatio>
            ) : (
              <AspectRatio ratio={9 / 16} mb="xl" style={{ width: '100%', height: '100%' }}>
                <ImagePlaceholder iconWidth={70} newStyle={{ maxHeight: '320px' }} />
              </AspectRatio>
            )}
            <Card.Section p="md">
              <Flex direction="column" gap="xs" align="center" justify="space-between" h="80%">
                <Box>
                  <Flex justify="space-between" align="center" mb="xs">
                    <Text
                      component={Link}
                      href={`catalogo/detalles-producto/${product.slug}`}
                      fw={500}
                      fz={{ base: 'lg', sm: theme.fontSizes['3xl'] }}
                      className={classes['link-hover']}
                      tt="capitalize"
                      c="brand.7"
                    >
                      {product.title}
                    </Text>
                  </Flex>
                </Box>
                <Flex direction="column" gap="xs" align="start" justify="end" h="80%" w="100%">
                  <Text c="brand.8" fw={500} fz={theme.fontSizes['2xl']}>
                    {currencyFormat(product.price)}
                  </Text>
                </Flex>
              </Flex>
            </Card.Section>
          </SimpleGrid>
        </Card>
      ))}
    </>
  );
};
