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

    // Single API call without unnecessary fallbacks
    const response = await api.post('/users/sync', userDataToSend);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Backend error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data ? JSON.stringify(error.response.data, null, 2) : 'No data',
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
 * Save customer address - checks if address exists and updates it
 */
export const saveCustomerAddress = async (userId: string, address: CustomerAddress) => {
  try {
    // First, get the user's existing addresses
    const existingAddresses = await getCustomerAddresses(userId);

    if (existingAddresses && existingAddresses.length > 0) {
      const addressId = existingAddresses[0].id;

      // Update the existing address
      const response = await api.put(`users/${userId}/addresses/${addressId}`, address);
      return response.data;
    } else {
      // No existing address, create a new one
      const response = await api.post(`users/${userId}/addresses`, address);
      return response.data;
    }
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
    if (error instanceof AxiosError && error.response?.status === 404) {
      return []; // No addresses found
    }
    console.error('Error getting customer addresses:', error);
    throw error;
  }
};
