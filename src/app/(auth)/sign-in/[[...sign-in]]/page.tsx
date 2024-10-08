import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs';
import { Center, Loader } from '@mantine/core';

export default function Page() {
  return (
    <Center mih="100vh">
      <ClerkLoading>
        <Loader size={50} type="dots" />
      </ClerkLoading>

      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>
    </Center>
  );
}
