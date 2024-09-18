'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/utils';
import { AspectRatio, Box, Card, Flex, Image, Text } from '@mantine/core';
import ImagePlaceholder from '../global/ImagePlaceHolder';
import { Product } from '@/interfaces';

export function CardCatalogo({ product }: { product: Product }) {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  const { images, title, description, price, slug } = product;
  return (
    <Link href={`/catalogo/detalles-producto/${slug}`} passHref style={{ textDecoration: 'none' }}>
      <Card shadow="sm">
        <Card.Section>
          {images.length === 0 ? (
            <AspectRatio ratio={4 / 3}>
              <ImagePlaceholder iconWidth={70} />
            </AspectRatio>
          ) : (
            <AspectRatio ratio={4 / 3}>
              <Image
                src={displayImage}
                h={160}
                alt={title}
                width={160}
                height={160}
                style={{ objectFit: 'cover' }}
                onMouseEnter={() => setDisplayImage(images[1] ?? images[0])}
                onMouseLeave={() => setDisplayImage(images[0])}
              />
            </AspectRatio>
          )}
        </Card.Section>
        <Flex direction="column" justify="space-between" gap="xs" h="100%">
          <Box>
            <Text fw={500} fz="lg" c="brand.7" mt="md" tt="capitalize">
              {title}
            </Text>

            <Text mt="xs" fw={300} fz="lg" c="brand.7">
              {description}
            </Text>
          </Box>
          <Text mt="xs" fw={500} fz="3xl" c="brand.7">
            ${formatPrice(price)}
          </Text>
        </Flex>
      </Card>
    </Link>
  );
}
