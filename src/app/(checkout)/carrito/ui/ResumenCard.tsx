import { Button, Text, Flex, useMantineTheme, Box } from '@mantine/core';

export const ResumenCard = () => {
  const theme = useMantineTheme();
  return (
    <Flex
      direction="column"
      justify="space-between"
      h="100%"
      w="100%"
      p="0"
      bg="secondary.1"
      style={{ borderRadius: '6px' }}
    >
      <Flex justify="space-between" w="100%" p="xl">
        <Text fw={300} fz={theme.fontSizes['2xl']} c="brand.7">
          No. Productos:{' '}
        </Text>
        <Text fw={300} fz={theme.fontSizes['2xl']} c="brand.7">
          2
        </Text>
      </Flex>
      <Box>
        <Flex justify="space-between" w="100%" px="xl">
          <Text fw={300} fz={theme.fontSizes['2xl']} c="brand.7">
            Subtotal:{' '}
          </Text>
          <Text fw={300} fz={theme.fontSizes['2xl']} c="brand.7">
            $200
          </Text>
        </Flex>
        <Flex justify="space-between" w="100%" px="xl">
          <Text fw={300} fz={theme.fontSizes['2xl']} c="brand.7">
            Impuestos (21%):{' '}
          </Text>
          <Text fw={300} fz={theme.fontSizes['2xl']} c="brand.7">
            $200
          </Text>
        </Flex>
      </Box>
      <Flex justify="space-between" w="100%" px="xl">
        <Text fw={500} fz={theme.fontSizes['2xl']} c="brand.8">
          Total:{' '}
        </Text>
        <Text fw={500} fz={theme.fontSizes['2xl']} c="brand.8">
          $200
        </Text>
      </Flex>
      <Button color="blue" fullWidth mt="md" radius="sm" size="lg" bg="brand.8">
        Continuar
      </Button>
    </Flex>
  );
};
