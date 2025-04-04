'use client';

import { useUser } from '@clerk/nextjs';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { getUserByClerkId, saveCustomerInfo } from '@/services/saveCustomerInfo';
import { api } from '@/api/api';
import { useCartStore } from '@/store';
import { useAddressStore } from '@/store';

// Define user interface for database user
interface DbUser {
  id: string;
  clerkId: string;
  email?: string;
  name?: string;
  addresses?: Array<{
    id?: string;
    address?: string;
    zipCode?: string;
    city?: string;
    province?: string;
    phone?: string;
  }>;
  [key: string]: unknown; // For any additional properties
}

// Define the context shape
type AuthSyncContextType = {
  isSyncing: boolean;
  isSynced: boolean;
  userInDb: DbUser | null;
  forceSync: () => void; // New function to force synchronization
};

// Create context with default values
const AuthSyncContext = createContext<AuthSyncContextType>({
  isSyncing: false,
  isSynced: false,
  userInDb: null,
  forceSync: () => {}, // Default no-op function
});

// Hook to use the context values
export const useAuthSync = () => useContext(AuthSyncContext);

// Provider component
export function AuthSyncProvider({ children }: { children: ReactNode }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isSyncing, setIsSyncing] = useState(false);
  const [isSynced, setIsSynced] = useState(false);
  const [userInDb, setUserInDb] = useState<DbUser | null>(null);
  const [syncCounter, setSyncCounter] = useState(0); // Counter to force re-sync
  const clearCart = useCartStore((state) => state.clearCart);
  const setAddress = useAddressStore((state) => state.setAddress);

  // Reset sync state and clear stores when user changes
  useEffect(() => {
    if (user?.id) {
      // Set isSynced to false when user changes or first appears
      setIsSynced(false);
    } else {
      // Clear stores when user logs out
      clearCart();
      setAddress({
        email: '',
        name: '',
        address: '',
        zipCode: '',
        city: '',
        phone: '',
        province: '',
        clerkId: '',
      });
    }
  }, [user?.id, clearCart, setAddress]);

  // Function to force a new synchronization attempt
  const forceSync = () => {
    setIsSynced(false);
    setSyncCounter((prev) => prev + 1);
  };

  // Effect to sync user with backend after authentication
  useEffect(() => {
    // Don't do anything if user state hasn't loaded yet
    if (!isLoaded) return;

    // If already synced, don't do it again
    if (isSynced) return;

    // Only sync if user is authenticated
    if (isSignedIn && user && !isSyncing) {
      const syncUser = async () => {
        try {
          setIsSyncing(true);

          // Check if user exists in database
          try {
            const existingUser = await getUserByClerkId(user.id);

            if (existingUser) {
              setUserInDb(existingUser);
              setIsSynced(true);
              return;
            }

            // Add timestamp to avoid email collisions
            const timestamp = Date.now();

            // Build user data
            const userData = {
              clerkId: user.id,
              email: user.primaryEmailAddress?.emailAddress || `user-${timestamp}@example.com`,
              name: user.fullName || user.username || `User-${timestamp}`,
            };

            // Try with saveCustomerInfo
            try {
              const result = await saveCustomerInfo(userData);
              setUserInDb(result);
            } catch (saveError) {
              console.error('[AUTH_SYNC] Error saving user with API client:', saveError);

              // Try with api as fallback
              try {
                const response = await api.post('/users/sync', userData);
                setUserInDb(response.data);
              } catch (apiError) {
                console.error('[AUTH_SYNC] API error:', apiError);
                throw new Error('Failed to sync user after multiple attempts');
              }
            }
          } catch (error) {
            console.error('[AUTH_SYNC] Error verifying/syncing user:', error);
          } finally {
            setIsSynced(true);
            setIsSyncing(false);
          }
        } catch (error) {
          console.error('[AUTH_SYNC] Error in sync process:', error);
          setIsSyncing(false);
          setIsSynced(true);
        }
      };

      // Execute sync
      syncUser();
    } else if (!isSignedIn) {
      // User not authenticated, mark as synced
      setIsSynced(true);
    }
  }, [isLoaded, isSignedIn, user, isSynced, isSyncing, syncCounter]); // Added syncCounter as dependency

  // Context value to be provided
  const contextValue = {
    isSyncing,
    isSynced,
    userInDb,
    forceSync,
  };

  return <AuthSyncContext.Provider value={contextValue}>{children}</AuthSyncContext.Provider>;
}
