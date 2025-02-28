'use client';

import { Flex, Image } from '@mantine/core';
import NextImage from 'next/image';
import { useState } from 'react';

interface HistoriaImageProps {
  src: string;
}

export const HistoriaImage = ({ src }: HistoriaImageProps) => {
  const [imageError, setImageError] = useState(false);

  // Log image path for debugging
  console.log('Loading historia image:', src);

  return (
    <Image
      component={NextImage}
      radius="md"
      height={500}
      width={400}
      fit="contain"
      alt="Haciendo una instalación"
      src={src}
      unoptimized={true}
      onError={(e) => {
        console.error('Error loading historia image:', src, e);
        setImageError(true);
      }}
      style={{ opacity: imageError ? 0.5 : 1 }}
    />
  );
};

export const HistoriaImages: React.FC = () => {
  return (
    <Flex
      justify="center"
      gap="11xl"
      my="11xl"
      px="sm"
      w="100%"
      align="center"
      direction={{ base: 'column', sm: 'row' }}
    >
      <HistoriaImage src="/images/kooben-historia1.jpeg" />
      <HistoriaImage src="/images/kooben-historia2.jpeg" />
    </Flex>
  );
};
