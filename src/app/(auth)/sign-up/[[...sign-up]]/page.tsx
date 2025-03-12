'use client';

import { SignUp, ClerkLoaded, ClerkLoading, useSignUp } from '@clerk/nextjs';
import { Center, Loader } from '@mantine/core';
import { useEffect } from 'react';
import { useAuthSync } from '@/providers/AuthSyncProvider';

// Wrapper to ensure new users are synced with database
const SignUpWithSync = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { forceSync } = useAuthSync();

  // Monitor sign-up status to trigger sync
  useEffect(() => {
    if (!isLoaded) return;

    // When sign-up is complete, force a sync
    if (signUp?.status === 'complete' && signUp?.createdUserId) {
      // Force synchronization with backend
      forceSync();
    }
  }, [isLoaded, signUp?.status, signUp?.createdUserId, forceSync]);

  return <SignUp />;
};

export default function Page() {
  return (
    <Center mih="100vh" style={{ flexDirection: 'column' }}>
      <ClerkLoading>
        <Loader size={50} type="dots" />
      </ClerkLoading>

      <ClerkLoaded>
        <SignUpWithSync />
      </ClerkLoaded>
    </Center>
  );
}
