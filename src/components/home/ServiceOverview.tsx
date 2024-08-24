'use client';

import { CreditCardSVG, HammerSVG, TruckSVG, QualitySVG } from '@/assets';
import { Card, Center, Text, SimpleGrid, useMantineTheme } from '@mantine/core';

interface ServiceCardProps {
  title: string;
  Icon: React.ComponentType<any>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, Icon }) => {
  const theme = useMantineTheme();

  return (
    <Card h="100%" w="100%">
      <Text
        fw={300}
        mx={{ base: 14, sm: 24 }}
        mt={{ base: 4, sm: 24 }}
        c="brand.8"
        fz={{ base: 'xl', sm: theme.fontSizes['2xl'], lg: theme.fontSizes['5xl'] }}
      >
        {title}
      </Text>
      <Center h="100%">
        <Icon />
      </Center>
    </Card>
  );
};

export const ServiceOverview = () => {
  return (
    <SimpleGrid
      mih={388}
      bg="secondary.0"
      cols={{ base: 2, sm: 4 }}
      spacing={{ base: 'md', md: 'xl' }}
      px={{ base: 40, sm: 40, md: 120 }}
      py={{ base: 30, sm: 58 }}
    >
      <ServiceCard title="Cuotas" Icon={CreditCardSVG} />
      <ServiceCard title="Envíos" Icon={TruckSVG} />
      <ServiceCard title="Montaje" Icon={HammerSVG} />
      <ServiceCard title="Calidad" Icon={QualitySVG} />
    </SimpleGrid>
  );
};
