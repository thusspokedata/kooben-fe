'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { currencyFormat } from '@/utils';
import { AspectRatio, Box, Card, Flex, Text } from '@mantine/core';
import ImagePlaceholder from '../global/ImagePlaceHolder';
import { Product } from '@/interfaces';

export function CardCatalogo({ product }: { product: Product }) {
  const [displayImage, setDisplayImage] = useState(
    product.images && product.images.length > 0 ? product.images[0] : undefined
  );
  const [imageError, setImageError] = useState(false);

  const { images, title, description, price, slug } = product;
  const hasImages = images && images.length > 0;

  // Log image URL for debugging
  console.log('CardCatalogo - Image URL:', displayImage || 'No image');

  return (
    <Link href={`/catalogo/detalles-producto/${slug}`} passHref style={{ textDecoration: 'none' }}>
      <Card shadow="sm">
        <Card.Section>
          {!hasImages || !displayImage || imageError ? (
            <AspectRatio ratio={4 / 3}>
              <ImagePlaceholder iconWidth={70} />
            </AspectRatio>
          ) : (
            <AspectRatio ratio={4 / 3}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={displayImage}
                  alt={title || 'Product image'}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized={true}
                  onMouseEnter={() => images.length > 1 && setDisplayImage(images[1])}
                  onMouseLeave={() => setDisplayImage(images[0])}
                  onError={(e) => {
                    console.error('Error loading catalog image:', displayImage, e);
                    setImageError(true);
                  }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={true}
                />
              </div>
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
            {currencyFormat(price)}
          </Text>
        </Flex>
      </Card>
    </Link>
  );
}
