'use client';

import { Grid, Card, Title } from '@mantine/core';
import classes from './Filters.module.css';
import { useHover } from '@mantine/hooks';

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
  return (
    <Card
      ref={ref}
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
        {category}
      </Title>
    </Card>
  );
}

export const Filters = () => {
  return (
    <Grid w="100%" gutter={{ base: 16, sm: 32 }}>
      <Grid.Col span={{ base: 6, sm: 4 }} w="auto" h={{ base: 330, sm: 520 }}>
        <ArticleCardImage imageUrl="/images/20240629_180611.jpg" category="Respaldo de cama" />
      </Grid.Col>

      <Grid.Col span={{ base: 6, sm: 8 }} mah={520}>
        <Grid gutter={{ base: 16, sm: 32 }}>
          <Grid.Col span={{ base: 12, sm: 6 }} mah={300}>
            <ArticleCardImage aspectRatio="4/3" imageUrl="/images/20240629_164705.jpg" category="Mesa de luz" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }} mah={300}>
            <ArticleCardImage aspectRatio="4/3" imageUrl="/images/20240629_165101.jpg" category="Respaldo de cama" />
          </Grid.Col>
          <Grid.Col span={12} h={230} visibleFrom="sm">
            <ArticleCardImage imageUrl="/images/botinero.png" category="Botinero" />
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={6} h={220} hiddenFrom="sm">
        <ArticleCardImage imageUrl="/images/botinero.png" category="Botinero" />
      </Grid.Col>

      <Grid.Col span={{ base: 6, sm: 12 }} h={220}>
        <ArticleCardImage category="Botinero" imageUrl="/images/botinero.png" />
      </Grid.Col>
    </Grid>
  );
};

export default Filters;
