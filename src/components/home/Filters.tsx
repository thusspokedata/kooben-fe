'use client';

import { useRouter } from 'next/navigation';
import { Grid, Card, Title, SimpleGrid, Center, Loader } from '@mantine/core';
import classes from './Filters.module.css';
import { useHover } from '@mantine/hooks';
import { useProducts } from '@/hooks/useProducts';
import type { Product } from '@/interfaces';
import { CATEGORIES, CategoryKey } from '@/utils';
import ImagePlaceholder from '@/components/global/ImagePlaceHolder';

interface ArticleCardImageProps {
  aspectRatio?: string;
  imageUrl?: string;
  category: string;
  backgroundSize?: string;
}

export function ArticleCardImage({
  aspectRatio = '',
  imageUrl,
  category,
  backgroundSize = 'cover',
}: ArticleCardImageProps) {
  const { hovered, ref } = useHover();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/catalogo?category=${category}`);
  };

  // If no imageUrl is provided, render the ImagePlaceholder component
  if (!imageUrl) {
    return (
      <Card
        ref={ref}
        onClick={handleClick}
        shadow={hovered ? 'xl' : 'xs'}
        p="xl"
        radius="sm"
        className={classes.imageContainer}
        style={{
          height: '100%',
          width: '100%',
          cursor: 'pointer',
          aspectRatio,
        }}
      >
        <ImagePlaceholder iconWidth={70} />
        <div className={classes.overlay} />
        <Title order={3} className={classes.title} tt="uppercase">
          {CATEGORIES[category as CategoryKey]}
        </Title>
      </Card>
    );
  }

  return (
    <Card
      ref={ref}
      onClick={handleClick}
      shadow={hovered ? 'xl' : 'xs'}
      radius="sm"
      className={classes.imageContainer}
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer',
        backgroundSize,
        aspectRatio,
      }}
    >
      <div className={classes.overlay} />
      <Title order={3} className={classes.title} tt="uppercase">
        {CATEGORIES[category as CategoryKey]}
      </Title>
    </Card>
  );
}

export const Filters = () => {
  const { products, isLoading } = useProducts();

  if (isLoading)
    return (
      <Center h={300}>
        <Loader size="xl" />
      </Center>
    );

  // Helper function to get the first image of the first product in a category
  const getFirstProductImage = (category: string) => {
    const product = products.find((p: Product) => p.category === category);
    return product ? product.images[0] : undefined; // Return undefined to trigger the placeholder
  };

  return (
    <>
      <Grid w="100%" gutter={{ base: 6, xs: 10 }}>
        <Grid.Col span={{ base: 5, xs: 4 }} order={{ base: 2, xs: 1 }}>
          <ArticleCardImage
            aspectRatio="9/16"
            imageUrl={getFirstProductImage('respaldo_de_cama')}
            category="respaldo_de_cama"
          />
        </Grid.Col>

        <Grid.Col span={{ base: 7, xs: 8 }} order={{ base: 1, xs: 2 }}>
          <SimpleGrid cols={{ base: 1, xs: 2 }} ml={{ xs: 'sm' }} spacing={{ base: 6, xs: 'sm' }}>
            <ArticleCardImage
              aspectRatio="4/3"
              imageUrl={getFirstProductImage('mesa_de_luz')}
              category="mesa_de_luz"
            />

            <ArticleCardImage
              aspectRatio="4/3"
              imageUrl={getFirstProductImage('escritorio')}
              category="respaldo_de_cama"
            />
          </SimpleGrid>

          <SimpleGrid cols={1} mt={16} ml="sm" visibleFrom="xs">
            <ArticleCardImage
              aspectRatio="4/2"
              imageUrl={getFirstProductImage('botinero')}
              category="botinero"
            />
          </SimpleGrid>
        </Grid.Col>
      </Grid>
      <SimpleGrid cols={1} mt={16} hiddenFrom="xs">
        <ArticleCardImage
          aspectRatio="5/2"
          imageUrl={getFirstProductImage('botinero')}
          category="botinero"
        />
      </SimpleGrid>
      <SimpleGrid cols={1} mt={16}>
        <ArticleCardImage
          aspectRatio="5/2"
          imageUrl={getFirstProductImage('botinero')}
          category="botinero"
        />
      </SimpleGrid>
    </>
  );
};

export default Filters;
