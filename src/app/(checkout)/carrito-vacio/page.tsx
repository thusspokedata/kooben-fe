'use client';

import { Container, Title, Text, Button, Group, rem } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function EmptyCart() {
  const router = useRouter();

  return (
    <Container
      py="xl"
      style={{ textAlign: 'center', paddingTop: rem(100), paddingBottom: rem(120) }}
    >
      <IconShoppingCart
        size={rem(80)}
        stroke={1.5}
        style={{ marginBottom: rem(20), color: '#6f4e37' }}
      />

      <Title order={2} size="h1" fw={900} style={{ marginBottom: rem(15) }}>
        Tu carrito está vacío
      </Title>

      <Text size="lg" c="dimmed" style={{ marginBottom: rem(30) }}>
        Parece que aún no has agregado ningún producto a tu carrito. Explora nuestro catálogo para
        encontrar muebles que transformen tu hogar.
      </Text>

      <Group justify="center">
        <Button component={Link} href="/catalogo" size="md" variant="filled" color="brand.8">
          Ver catálogo
        </Button>

        <Button variant="subtle" color="gray" size="md" onClick={() => router.back()}>
          Volver atrás
        </Button>
      </Group>
    </Container>
  );
}
