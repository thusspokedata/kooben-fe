'use client';

import { Grid, Paper, Card, Title, Box } from '@mantine/core';
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
    <Grid w="100%" gutter={32}>
      <Grid.Col span={4} w="auto" h={520}>
        <ArticleCardImage imageUrl="/images/20240629_180611.jpg" category="Respaldo de cama" />
      </Grid.Col>

      <Grid.Col span={8} mah={520}>
        <Grid gutter={32}>
          <Grid.Col span={6} mah={300}>
            <ArticleCardImage aspectRatio="4/3" imageUrl="/images/20240629_164705.jpg" category="Mesa de luz" />
          </Grid.Col>
          <Grid.Col span={6} mah={300}>
            <ArticleCardImage aspectRatio="4/3" category="Respaldo de cama" />
          </Grid.Col>
          <Grid.Col span={12} h={230}>
            <ArticleCardImage imageUrl="/images/botinero.png" category="Botinero" />
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={12} h={220}>
        <ArticleCardImage category="Botinero" />
      </Grid.Col>
    </Grid>
  );
};

export default Filters;
