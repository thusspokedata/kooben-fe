import { AspectRatio, Box, Card, Flex, Image, Text } from '@mantine/core';
import ImagePlaceholder from '../global/ImagePlaceHolder';

interface CardCatalogoProps {
  images: string[];
  title: string;
  description: string;
  price: string;
}

export function CardCatalogo({ images, title, description, price }: CardCatalogoProps) {
  return (
    <Card shadow="sm">
      <Card.Section>
        {images.length === 0 ? (
          <AspectRatio ratio={4 / 3}>
            <ImagePlaceholder iconWidth={70} />
          </AspectRatio>
        ) : (
          <AspectRatio ratio={4 / 3}>
            <Image src={images[0]} h={160} alt={title} width={160} height={160} style={{ objectFit: 'cover' }} />
          </AspectRatio>
        )}
      </Card.Section>
      <Flex direction="column" justify="space-between" gap="xs" h="100%">
        <Box>
          <Text fw={500} size="lg" c="brand.7" mt="md" tt="capitalize">
            {title}
          </Text>

          <Text mt="xs" fw={300} fz="lg" c="brand.7">
            {description}
          </Text>
        </Box>
        <Text mt="xs" fw={500} fz="3xl" c="brand.7">
          ${price}
        </Text>
      </Flex>
    </Card>
  );
}
