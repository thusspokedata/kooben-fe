import { Box, Flex, Text, Title } from '@mantine/core';
import { ReactNode } from 'react';
import { ResponsiveContainer } from './ResponsiveContainer';

interface LayoutProps {
  title: string;
  subtitle?: string;
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
}

export const CheckoutLayout = ({ title, subtitle, contentLeft, contentRight }: LayoutProps) => {
  return (
    <ResponsiveContainer h="100%" style={{ minHeight: '100vh' }}>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
        <Flex direction="column" w={{ base: '100%', md: '90%' }}>
          <Box h={80}>
            <Title order={1} c="brand.8" fz={24} fw={500}>
              {title}
            </Title>
            {subtitle && (
              <Text c="brand.8" fz="lg" fw={300}>
                {subtitle}
              </Text>
            )}
          </Box>
          {contentLeft}
        </Flex>

        <Flex direction="column" align="end" w="100%">
          <Box h={80} ta="start" w={{ base: '100%', md: '80%' }}>
            <Text c="brand.8" fz={24} fw={500} w={{ base: '100%', md: '80%' }} pl="sm">
              Resumen
            </Text>
          </Box>
          <Box w={{ base: '100%', md: '80%' }} h={480} ta="end">
            {contentRight}
          </Box>
        </Flex>
      </Flex>
    </ResponsiveContainer>
  );
};
