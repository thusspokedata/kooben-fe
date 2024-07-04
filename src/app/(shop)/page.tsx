import Link from 'next/link';
import { Button, Flex, Text } from '@mantine/core';

export default function Home() {
  return (
    <>
      <Text c="red.2">shop</Text>
      <Flex gap="xs">
        <Button component={Link} href="/" color="yellow.4">
          Shop Page
        </Button>
        <Button component={Link} href="/" color="yellow.4">
          login page
        </Button>
        <Button component={Link} href="/auth/new-account" color="yellow.4">
          new account page
        </Button>
      </Flex>
    </>
  );
}
