import Link from 'next/link';
import { Button, Flex, Text } from '@mantine/core';

export default function LoginPage() {
  return (
    <>
      <Text c="cyan.5">login</Text>
      <Flex gap="xs">
        <Button component={Link} href="/" color="red.4">
          Shop Page
        </Button>
        <Button component={Link} href="/" color="red.4">
          login page
        </Button>
        <Button component={Link} href="/auth/new-account" color="red.4">
          new account page
        </Button>
      </Flex>
    </>
  );
}
