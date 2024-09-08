import { UserProfile, RedirectToSignIn, SignedOut, SignedIn } from '@clerk/nextjs';
import { Center } from '@mantine/core';

export default function Page() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <Center mih="100vh">
          <UserProfile />
        </Center>
      </SignedIn>
    </>
  );
}
