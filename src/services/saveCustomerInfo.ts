import { api } from '@/api/api';
import type { CustomerInfo, CustomerAddress } from '@/interfaces';
import { AxiosError } from 'axios';

/**
 * Create a new user or update if exists
 */
export const saveCustomerInfo = async (
  userData: Omit<Partial<CustomerInfo>, 'clerkId'> & { clerkId: string | null }
) => {
  try {
    // Basic verification
    if (!userData.clerkId) {
      console.error('Error: clerkId is required but is null or undefined');
      throw new Error('clerkId is required');
    }

    // Ensure we're sending exactly the expected format
    const userDataToSend = {
      clerkId: userData.clerkId,
      email: userData.email || '',
      name: userData.name || '',
    };

    // Use the same approach that works with fetch
    try {
      // Attempt 1: Using Axios normally
      const response = await api.post('/users/sync', userDataToSend);
      return response.data;
    } catch (axiosError) {
      // Attempt 2: Using stringified data, similar to fetch
      const stringifiedData = JSON.stringify(userDataToSend);
      const response = await api.post('/users/sync', stringifiedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Backend error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data ? JSON.stringify(error.response.data, null, 2) : 'No data',
        url: error.config?.url,
        method: error.config?.method,
        requestData: error.config?.data ? JSON.parse(error.config.data) : null,
      });
    }
    console.error('Error saving customer info:', error);
    throw error;
  }
};

/**
 * Get user by Clerk ID
 */
export const getUserByClerkId = async (clerkId: string) => {
  try {
    const response = await api.get(`/users/clerk/${clerkId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return null; // User not found
    }
    console.error('Error in getUserByClerkId:', error);
    throw error;
  }
};

/**
 * Update existing user
 */
export const updateUser = async (userId: string, userData: Partial<CustomerInfo>) => {
  try {
    const response = await api.patch(`users/${userId}`, userData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Error updating user:', {
        status: error.response?.status,
        data: JSON.stringify(error.response?.data, null, 2),
      });
    }
    throw error;
  }
};

/**
 * Save customer address
 */
export const saveCustomerAddress = async (userId: string, address: CustomerAddress) => {
  try {
    const response = await api.post(`users/${userId}/addresses`, address);
    return response.data;
  } catch (error) {
    console.error('Error saving customer address:', error);
    throw error;
  }
};

/**
 * Get customer addresses
 */
export const getCustomerAddresses = async (userId: string) => {
  try {
    const response = await api.get(`users/${userId}/addresses`);
    return response.data;
  } catch (error) {
    console.error('Error getting customer addresses:', error);
    throw error;
  }
};
