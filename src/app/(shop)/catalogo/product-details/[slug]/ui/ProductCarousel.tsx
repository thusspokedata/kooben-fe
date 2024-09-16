'use client';

import { Product } from '@/interfaces';
import { Carousel } from '@mantine/carousel';
import { useMantineTheme } from '@mantine/core';
import Image from 'next/image';

export function ProductCarousel({ product }: { product: Product }) {
  const theme = useMantineTheme();
  const slides = product.images.map((image: string) => (
    <Carousel.Slide key={image}>
      <Image
        src={image}
        alt="product"
        width={500}
        height={500}
        style={{ objectFit: 'contain', backgroundColor: theme.colors.neutral[1] }}
      />
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators mah={500} maw={500} controlSize={40} loop slideGap="md" align="start">
      {slides}
    </Carousel>
  );
}
