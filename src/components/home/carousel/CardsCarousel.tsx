'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import {
  useMantineTheme,
  rem,
  Text,
  Button,
  Card,
  Box,
  Flex,
  Divider,
  Skeleton,
} from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/interfaces';
import ImagePlaceholder from '@/components/global/ImagePlaceHolder';
import classes from './CardsCarousel.module.css';

interface CardProps {
  images: string[];
  title: string;
  description?: string;
  // price: number;
  // category: string;
}

function CardWithImage({ images, title, description }: CardProps) {
  const theme = useMantineTheme();
  const [imageError, setImageError] = useState(false);
  const hasImages = images && images.length > 0;

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Flex wrap="nowrap" gap={0}>
        {!hasImages || imageError ? (
          <Box style={{ width: '50%', height: 280, position: 'relative' }}>
            <ImagePlaceholder iconWidth={70} />
          </Box>
        ) : (
          <Box style={{ width: '50%', height: 280, position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={images[0]}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                unoptimized={true}
                onError={() => setImageError(true)}
              />
            </div>
          </Box>
        )}
        <Box className={classes.body} my={{ base: '', sm: 'xl' }} tt="uppercase">
          <Flex direction="column" gap="xs" justify="space-between" h="100%">
            <Box>
              <Text fw={500} mb="xs" fz={{ base: 'lg', sm: theme.fontSizes['3xl'] }} c="brand.8">
                {title}
              </Text>

              {description && (
                <Text size="sm" c="dimmed">
                  {description}
                </Text>
              )}
            </Box>
            <Button color="brand.8" mt="md" radius="xl">
              Más Info
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}

export function CardsCarousel() {
  const { products } = useProducts();
  const theme = useMantineTheme();
  const slides = products.map((item: Product) => (
    <Carousel.Slide key={item.title}>
      <CardWithImage {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={1}
      loop
      controlsOffset="md"
      controlSize={31}
      styles={{ control: { backgroundColor: theme.colors.brand[6] } }}
      nextControlIcon={
        <IconArrowRight style={{ width: rem(24), height: rem(24), color: 'white' }} />
      }
      previousControlIcon={
        <IconArrowLeft style={{ width: rem(24), height: rem(24), color: 'white' }} />
      }
    >
      {slides}
    </Carousel>
  );
}

export function BestSellersCarousel() {
  const theme = useMantineTheme();
  return (
    <Box mt={{ base: 40, sm: 80 }}>
      <Text
        ta="center"
        mb={theme.spacing['5xl']}
        fz={{ base: theme.fontSizes['6xl'], sm: theme.fontSizes['10xl'] }}
        c="secondary.6"
        tt="uppercase"
      >
        Lo más vendido
      </Text>
      <CardsCarousel />

      <Divider my={{ base: 40, sm: 82 }} size="lg" color="secondary.5" />
    </Box>
  );
}
