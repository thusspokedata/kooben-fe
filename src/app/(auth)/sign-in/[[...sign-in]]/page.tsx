'use client';

import { ClerkLoaded, ClerkLoading, SignIn, useSignIn, useUser } from '@clerk/nextjs';
import { Center, Loader } from '@mantine/core';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// This component verifies if the user exists in our database when logging in
const SignInWrapper = () => {
  const { isLoaded: isSignInLoaded, signIn, setActive } = useSignIn();
  const { isLoaded: isUserLoaded } = useUser();
  const router = useRouter();

  // Effect to monitor changes in authentication state
  useEffect(() => {
    // We only monitor the sign-in state
    if (!isSignInLoaded) return;

    // Detect when the sign-in process is completed
    if (signIn?.status === 'complete') {
      // Activate session if necessary
      if (signIn.createdSessionId) {
        setActive({ session: signIn.createdSessionId })
          .then(() => {
            router.push('/');
          })
          .catch((err) => {
            console.error('[SIGNIN FLOW] Error activating session:', err);
          });
      } else {
        // If there's no createdSessionId but login is successful, redirect
        router.push('/');
      }
    }
  }, [isSignInLoaded, signIn?.status, signIn?.createdSessionId, setActive, router]);

  // Show loading while Clerk components are loading
  if (!isSignInLoaded || !isUserLoaded) {
    return (
      <Center mih="100vh" style={{ flexDirection: 'column' }}>
        <ClerkLoading>
          <Loader size={50} type="dots" />
        </ClerkLoading>
      </Center>
    );
  }

  return <SignIn />;
};

export default function Page() {
  return (
    <Center mih="100vh" style={{ flexDirection: 'column' }}>
      <ClerkLoading>
        <Loader size={50} type="dots" />
      </ClerkLoading>

      <ClerkLoaded>
        <SignInWrapper />
      </ClerkLoaded>
    </Center>
  );
}
