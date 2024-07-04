import Link from 'next/link';
import { Button, Flex, Text } from '@mantine/core';

export default function NewAccountPage() {
  return (
    <>
      <Text c="blue.9">new account</Text>
      <Flex gap="xs">
        <Button component={Link} href="/" color="blue.4">
          Shop Page
        </Button>
        <Button component={Link} href="/auth/login" color="blue.4">
          login page
        </Button>
        <Button component={Link} href="/auth/new-account" color="blue.4">
          new account page
        </Button>
      </Flex>
    </>
  );
}
