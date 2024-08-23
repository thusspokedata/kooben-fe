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
      <Text fw={300} mx={24} mt={24} c="brand.8" fz={theme.fontSizes['5xl']}>
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
    <SimpleGrid h={388} bg="secondary.0" cols={4} spacing="xl" px={120} py={58}>
      <ServiceCard title="Cuotas" Icon={CreditCardSVG} />
      <ServiceCard title="Envíos" Icon={TruckSVG} />
      <ServiceCard title="Montaje" Icon={HammerSVG} />
      <ServiceCard title="Calidad" Icon={QualitySVG} />
    </SimpleGrid>
  );
};
