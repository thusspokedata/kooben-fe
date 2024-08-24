'use client';

import { Carousel } from '@mantine/carousel';
import { useMantineTheme, rem, Text, Button, Image, Group, Card, Box, Flex } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function CardWithImage({ image, title, category }: CardProps) {
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Flex wrap="nowrap" gap={0}>
        <Image src={image} height={280} alt={title} />
        <Box className={classes.body} mt={{ base: '', sm: 'xl' }} tt="uppercase">
          <Text fw={500} mb="xs" fz={{ base: 'lg', sm: theme.fontSizes['3xl'] }} c="brand.8">
            {title}
          </Text>

          <Text size="sm" c="dimmed">
            informacion sobre el producto
          </Text>

          <Button color="brand.8" mt="md" radius="xl">
            Más Info
          </Button>
        </Box>
      </Flex>
    </Card>
  );
}

const data = [
  {
    image: '/images/20240629_165022.jpg',
    title: 'Mesa de Luz',
    category: 'nature',
  },
  {
    image: '/images/20240629_172916.jpg',
    title: 'Respaldar de Cama',
    category: 'beach',
  },
  {
    image: '/images/botinero2.png',
    title: 'Botinero',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews',
    category: 'nature',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const slides = data.map((item) => (
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
      nextControlIcon={<IconArrowRight style={{ width: rem(24), height: rem(24), color: 'white' }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(24), height: rem(24), color: 'white' }} />}
    >
      {slides}
    </Carousel>
  );
}
