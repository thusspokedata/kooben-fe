import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs';
import { Center, Loader } from '@mantine/core';

export default function Page() {
  return (
    <Center>
      <ClerkLoading>
        <Loader size={50} type="dots" />
      </ClerkLoading>

      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>
    </Center>
  );
}
