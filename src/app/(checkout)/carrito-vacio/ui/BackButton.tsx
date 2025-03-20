'use client';

import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="subtle" color="gray" size="md" onClick={() => router.back()}>
      Volver atrás
    </Button>
  );
};
