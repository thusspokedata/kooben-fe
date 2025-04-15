'use client';

import { useAddressStore } from '@/store';
import { Text, Stack, Divider } from '@mantine/core';
import { SummaryBase } from '@/components/global/SummaryBase';
import { useEffect, useState } from 'react';

export const OrderSummary = ({ nextPage }: { nextPage: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const savedAddress = useAddressStore((state) => state.address);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null; // Render nothing while loading
  }

  const deliveryInfo = (
    <>
      <Text px="xl" fz="4xl" c={'brand.7'} fw={500} mt="xl" ta="left">
        Información de entrega
      </Text>
      {savedAddress ? (
        <Stack gap={2} align="flex-start" px="xl">
          <Text fz="2xl" c={'brand.7'}>
            {savedAddress.firstName} {savedAddress.lastName}
          </Text>
          <Text fz="2xl" c={'brand.7'}>
            {savedAddress.address}
          </Text>
          <Text fz="2xl" c={'brand.7'}>
            {savedAddress.zipCode}, {savedAddress.city}
          </Text>
          <Text fz="2xl" c={'brand.7'}>
            Tel: {savedAddress.phone}
          </Text>
          <Divider my="md" color="brand.7" variant="solid" w="100%" />
        </Stack>
      ) : (
        <Text c="dimmed">No hay información de entrega guardada</Text>
      )}
    </>
  );

  return <SummaryBase nextPage={nextPage}>{deliveryInfo}</SummaryBase>;
};
