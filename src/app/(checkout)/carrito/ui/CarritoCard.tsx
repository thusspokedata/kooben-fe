import { theme } from '@/themes/mantine-theme';
import { Card, Flex, Box, Button, Text, Image, AspectRatio, SimpleGrid, ActionIcon } from '@mantine/core';
import { Product } from '@/interfaces';
import ImagePlaceholder from '@/components/global/ImagePlaceHolder';
import { IconTrashFilled } from '@tabler/icons-react';

export const CarritoCard = ({ product }: { product: Product }) => {
  product = {
    id: '1',
    sizes: ['304', '305', '306'],
    images: [
      'https://via.placeholder.com/200x200.png?text=Image1',
      'https://via.placeholder.com/200x200.png?text=Image2',
    ],
    title: 'Modern Chair',
    description:
      'A sleek and comfortable chair made from premium materials. Perfect for any modern living room or office.',
    price: 199.99,
    slug: 'modern-chair',
    category: 'Furniture',
  };

  const { images, title, description, price, slug } = product;

  return (
    <Card shadow="0" w={{ base: '100%', md: '90%' }} p="lg" mah={360} radius="sm">
      <SimpleGrid cols={2}>
        {images.length !== 0 ? (
          <AspectRatio ratio={9 / 16} mb="xl" style={{ width: '100%', height: '100%' }}>
            <ImagePlaceholder iconWidth={70} newStyle={{ maxHeight: '320px' }} />
          </AspectRatio>
        ) : (
          <AspectRatio ratio={9 / 16} style={{ maxHeight: '320', margin: 0 }}>
            <Image src={images[0]} alt={title} style={{ objectFit: 'cover', maxHeight: '320px', margin: 0 }} />
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
                ${product.price}
              </Text>
              <Flex gap="lg">
                <Text c="brand.8" fw={700} fz={theme.fontSizes['2xl']}>
                  -
                </Text>
                <Text c="brand.8" fw={700} fz={theme.fontSizes['2xl']}>
                  1
                </Text>
                <Text c="brand.8" fw={700} fz={theme.fontSizes['2xl']}>
                  +
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card.Section>
      </SimpleGrid>
    </Card>
  );
};
