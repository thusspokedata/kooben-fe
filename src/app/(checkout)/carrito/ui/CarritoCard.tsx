'use client';

import { theme } from '@/themes/mantine-theme';
import { Card, Flex, Box, Button, Text, Image, AspectRatio, SimpleGrid, ActionIcon, Stack } from '@mantine/core';
import ImagePlaceholder from '@/components/global/ImagePlaceHolder';
import { IconTrashFilled } from '@tabler/icons-react';
import { useCartStore } from '@/store';
import { QuantitySelector } from '@/components';

export const CarritoCard = () => {
  const productsInCart = useCartStore((state) => state.cart);

  // <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />
  


  return (
    <>
      {productsInCart.map(({ title, price, image, description, size, slug }) => (
    
          <Card shadow="0" p="lg" mah={360} radius="sm" mb="lg" key={`${slug}-${size}`}>
            <SimpleGrid cols={2}>
              {image ? (
                <AspectRatio ratio={9 / 16} style={{ maxHeight: '320', margin: 0 }}>
                  <Image src={image} alt={title} style={{ objectFit: 'cover', maxHeight: '320px', margin: 0 }} />
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
                      <Text fw={500} fz={{ base: 'lg', sm: theme.fontSizes['3xl'] }} c="brand.7">
                        {title}
                      </Text>
                      <ActionIcon variant="transparent" c="brand.7" size="lg">
                        <IconTrashFilled />
                      </ActionIcon>
                    </Flex>

                    {description && (
                      <Text size="sm" c="dimmed">
                        {description}
                      </Text>
                    )}
                  </Box>
                  <Flex direction="column" gap="xs" align="start" justify="end" h="80%" w="100%">
                    <Text c="brand.8" fw={500} fz={theme.fontSizes['2xl']}>
                      ${price}
                    </Text>
                    {/* <Flex gap="lg">
                      <Text c="brand.8" fw={700} fz={theme.fontSizes['2xl']}>
                        -
                      </Text>
                      <Text c="brand.8" fw={700} fz={theme.fontSizes['2xl']}>
                        1
                      </Text>
                      <Text c="brand.8" fw={700} fz={theme.fontSizes['2xl']}>
                        +
                      </Text>
                    </Flex> */}
                    
                  </Flex>
                </Flex>
              </Card.Section>
            </SimpleGrid>
          </Card>
        
      ))}
    </>
  );
};
