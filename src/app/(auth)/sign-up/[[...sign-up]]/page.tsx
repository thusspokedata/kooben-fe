'use client';

import { SignUp, ClerkLoaded, ClerkLoading, useSignUp } from '@clerk/nextjs';
import { Center, Loader } from '@mantine/core';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// SignUp wrapper to handle redirects
const SignUpWrapper = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  // Effect to monitor sign-up status
  useEffect(() => {
    if (!isLoaded || !signUp) return;

    // When sign-up is complete
    if (signUp.status === 'complete') {
      // Set session as active if available
      if (signUp.createdSessionId) {
        setActive({ session: signUp.createdSessionId })
          .then(() => {
            // Redirect to homepage
            router.push('/');
          })
          .catch((err) => {
            console.error('Error activating session:', err);
            // Redirect anyway
            router.push('/');
          });
      } else {
        // If no session was created but sign-up is complete
        router.push('/');
      }
    }
  }, [isLoaded, signUp?.status, signUp?.createdSessionId, setActive, router, signUp]);

  if (!isLoaded) {
    return (
      <Center>
        <Loader size={50} type="dots" />
      </Center>
    );
  }

  return <SignUp />;
};

export default function Page() {
  return (
    <Center mih="100vh" style={{ flexDirection: 'column' }}>
      <ClerkLoading>
        <Loader size={50} type="dots" />
      </ClerkLoading>

      <ClerkLoaded>
        <SignUpWrapper />
      </ClerkLoaded>
    </Center>
  );
}
