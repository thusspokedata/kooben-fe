'use client';

import { useRouter } from 'next/navigation';
import { Grid, Card, Title } from '@mantine/core';
import classes from './Filters.module.css';
import { useHover } from '@mantine/hooks';
import { useProducts } from '@/hooks/useProducts';
import type { Product } from '@/interfaces';
import { CATEGORIES, CategoryKey } from '@/utils';

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

  return (
    <Card
      ref={ref}
      onClick={handleClick}
      shadow={hovered ? 'xl' : 'xs'}
      p="xl"
      radius="0"
      className={classes.imageContainer}
      style={{
        backgroundImage: `url(${imageUrl})`,
        height: '100%',
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

  if (isLoading) return <div>Cargando...</div>;

  // Helper function to get the first image of the first product in a category
  const getFirstProductImage = (category: string) => {
    const product = products.find((p: Product) => p.category === category);
    return product ? product.images[0] : '/images/placeholder.jpg'; // TODO: Replace with placeholder image
  };

  return (
    <Grid w="100%" gutter={{ base: 16, sm: 32 }}>
      <Grid.Col span={{ base: 6, sm: 4 }} w="auto" h={{ base: 330, sm: 520 }}>
        <ArticleCardImage imageUrl={getFirstProductImage('respaldo_de_cama')} category="respaldo_de_cama" />
      </Grid.Col>

      <Grid.Col span={{ base: 6, sm: 8 }} mah={520}>
        <Grid gutter={{ base: 16, sm: 32 }}>
          <Grid.Col span={{ base: 12, sm: 6 }} mah={300}>
            <ArticleCardImage aspectRatio="4/3" imageUrl={getFirstProductImage('mesa_de_luz')} category="mesa_de_luz" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }} mah={300}>
            <ArticleCardImage
              aspectRatio="4/3"
              imageUrl={getFirstProductImage('respaldo_de_cama')}
              category="respaldo_de_cama"
            />
          </Grid.Col>
          <Grid.Col span={12} h={230} visibleFrom="sm">
            <ArticleCardImage imageUrl={getFirstProductImage('botinero')} category="botinero" />
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={6} h={220} hiddenFrom="sm">
        <ArticleCardImage imageUrl={getFirstProductImage('botinero')} category="botinero" />
      </Grid.Col>

      <Grid.Col span={{ base: 6, sm: 12 }} h={220}>
        <ArticleCardImage category="botinero" imageUrl={getFirstProductImage('botinero')} />
      </Grid.Col>
    </Grid>
  );
};

export default Filters;
