'use client';

import { Product } from '@/interfaces';
import { Carousel } from '@mantine/carousel';
import { useMantineTheme, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { useState } from 'react';
import ImagePlaceholder from '@/components/global/ImagePlaceHolder';

export function ProductCarousel({ product }: { product: Product }) {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const imageWidth = isMobile ? 350 : 500;
  const imageHeight = isMobile ? 350 : 500;

  // Log all product images for debugging
  console.log('ProductCarousel - All images:', product.images);

  // Ensure the image URL is valid and handle special characters
  const isValidImageUrl = (url: string): boolean => {
    return !!url && typeof url === 'string' && url.trim() !== '';
  };

  // Function to safely handle URLs with special characters
  const getSafeImageUrl = (url: string): string => {
    if (!url) return '';

    try {
      // For debugging
      console.log('Processing URL:', url);

      // Return the URL as is - Next.js with unoptimized=true should handle it correctly
      return url;
    } catch (error) {
      console.error('Error processing image URL:', error);
      return '';
    }
  };

  const slides = product.images.map((image: string, index: number) => {
    // Log each image URL for debugging
    console.log(`ProductCarousel - Image ${index}:`, image);

    const hasError = imageErrors[image] || !isValidImageUrl(image);
    const safeImageUrl = getSafeImageUrl(image);

    return (
      <Carousel.Slide key={`${image}-${index}`}>
        {hasError ? (
          <Box w={imageWidth} h={imageHeight} style={{ backgroundColor: theme.colors.neutral[1] }}>
            <ImagePlaceholder iconWidth={70} />
          </Box>
        ) : (
          <Image
            src={safeImageUrl}
            alt={`${product.title || 'Product'} - Image ${index + 1}`}
            width={imageWidth}
            height={imageHeight}
            priority={index === 0} // Only set priority for the first image
            unoptimized={true} // Skip Next.js image optimization
            style={{ objectFit: 'contain', backgroundColor: theme.colors.neutral[1] }}
            onError={(e) => {
              console.error('Error loading product image:', safeImageUrl, e);
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
