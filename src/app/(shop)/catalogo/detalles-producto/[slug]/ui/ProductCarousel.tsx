'use client';

import { Product } from '@/interfaces';
import { Carousel } from '@mantine/carousel';
import { useMantineTheme, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { useState } from 'react';
import ImagePlaceholder from '@/components/global/ImagePlaceHolder';

export function ProductCarousel({ product }: { product: Product }): JSX.Element {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const imageWidth = isMobile ? 350 : 500;
  const imageHeight = isMobile ? 350 : 500;

  const slides = product.images.map((image: string, index: number) => {
    const hasError = imageErrors[image];

    return (
      <Carousel.Slide key={`${image}-${index}`}>
        {hasError ? (
          <Box w={imageWidth} h={imageHeight} style={{ backgroundColor: theme.colors.neutral[1] }}>
            <ImagePlaceholder iconWidth={70} />
          </Box>
        ) : (
          <Image
            src={image}
            alt={`${product.title || 'Product'} - Image ${index + 1}`}
            width={imageWidth}
            height={imageHeight}
            priority={index === 0}
            style={{ objectFit: 'contain', backgroundColor: theme.colors.neutral[1] }}
            onError={() => {
              setImageErrors((prev) => ({ ...prev, [image]: true }));
            }}
          />
        )}
      </Carousel.Slide>
    );
  });

  return (
    <Carousel
      withIndicators
      mah={imageHeight}
      maw={imageWidth}
      controlSize={40}
      loop
      slideGap="md"
      align="start"
    >
      {slides}
    </Carousel>
  );
}
