import { SignUp } from '@clerk/nextjs';
import { Flex } from '@mantine/core';

export default function Page() {
  return (
    <Flex w="100%" align="center" justify="center">
      <SignUp />
    </Flex>
  );
}
