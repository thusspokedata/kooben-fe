'use client';

import { Product } from '@/interfaces';
import { Carousel } from '@mantine/carousel';
import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

export function ProductCarousel({ product }: { product: Product }) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const imageWidth = isMobile ? 350 : 500;
  const imageHeight = isMobile ? 350 : 500;

  const slides = product.images.map((image: string) => (
    <Carousel.Slide key={image}>
      <Image
        src={image}
        alt="product"
        width={imageWidth}
        height={imageHeight}
        priority={true}
        style={{ objectFit: 'contain', backgroundColor: theme.colors.neutral[1] }}
      />
    </Carousel.Slide>
  ));

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
