import { BestSellersCarousel, Filters } from '@/components';
import { Container, Flex, Text } from '@mantine/core';
import getUsers from '../../api/get-user';
import { auth, currentUser } from '@clerk/nextjs/server';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default async function Home() {
  return (
    <Container size="lg" px="lg" pt="lg" h="100%">
      <Flex direction="column" h="100%">
        <Filters />
        <BestSellersCarousel />
      </Flex>
    </Container>
  );
}
