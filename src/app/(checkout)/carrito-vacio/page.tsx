import { Container, Title, Text, Button, Group, rem, Box } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';
import { BackButton } from './ui/BackButton';

export default function EmptyCart() {
  return (
    <Container
      py="xl"
      style={{
        textAlign: 'center',
        paddingTop: rem(100),
        paddingBottom: rem(120),
        minHeight: 'calc(100vh - 280px)', // Accounting for header (80px) and footer (200px)
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: rem(20),
      }}
    >
      <Box>
        <IconShoppingCart
          size={rem(80)}
          stroke={1.5}
          style={{ marginBottom: rem(20), color: 'var(--mantine-color-brand-6)' }}
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

          <BackButton />
        </Group>
      </Box>
    </Container>
  );
}
