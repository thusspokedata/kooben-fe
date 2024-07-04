import { SignIn } from '@clerk/nextjs';
import { Center, Flex } from '@mantine/core';

export default function Page() {
  return (
    <Center h="100%" w="100%">
      <SignIn />
    </Center>
  );
}
