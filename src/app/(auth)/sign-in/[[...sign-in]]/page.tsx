'use client';

import { ClerkLoaded, ClerkLoading, SignIn, useSignIn } from '@clerk/nextjs';
import { Center, Loader } from '@mantine/core';
import { useEffect } from 'react';
import { useAuthSync } from '@/providers/AuthSyncProvider';

// Wrapper to ensure users are synced with database
const SignInWithSync = () => {
  const { isLoaded, signIn } = useSignIn();
  const { forceSync } = useAuthSync();

  // Monitor sign-in status to trigger sync
  useEffect(() => {
    if (!isLoaded) return;

    // When sign-in is complete, force a sync
    if (signIn?.status === 'complete') {
      // Force synchronization with backend
      forceSync();
    }
  }, [isLoaded, signIn?.status, forceSync]);

  return <SignIn />;
};

export default function Page() {
  return (
    <Center mih="100vh" style={{ flexDirection: 'column' }}>
      <ClerkLoading>
        <Loader size={50} type="dots" />
      </ClerkLoading>

      <ClerkLoaded>
        <SignInWithSync />
      </ClerkLoaded>
    </Center>
  );
}
