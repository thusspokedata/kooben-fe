import { api } from '@/api/api';
import type { CustomerInfo, CustomerAddress } from '@/interfaces';
import { AxiosError } from 'axios';

/**
 * Create a new user or update if exists
 */
export const saveCustomerInfo = async (customerInfo: CustomerInfo) => {
  try {
    if (!customerInfo.clerkId) {
      throw new Error('clerkId is required');
    }

    // First check if the user already exists
    try {
      const existingUser = await getUserByClerkId(customerInfo.clerkId);
      if (existingUser) {
        // If user exists, update it
        return await updateUser(existingUser.id, customerInfo);
      }
    } catch (error) {
      // If error is 404, user doesn't exist, continue with creation
      if (!(error instanceof AxiosError) || error.response?.status !== 404) {
        throw error;
      }
    }

    // Create new user
    const response = await api.post('/api/users', customerInfo);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Backend error details:', {
        status: error.response?.status,
        data: JSON.stringify(error.response?.data, null, 2),
        message: error.message,
      });
    }
    throw error;
  }
};

/**
 * Get user by Clerk ID
 */
export const getUserByClerkId = async (clerkId: string) => {
  try {
    const response = await api.get(`/api/users/clerk/${clerkId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return null; // User not found
    }
    throw error;
  }
};

/**
 * Update existing user
 */
export const updateUser = async (userId: string, userData: Partial<CustomerInfo>) => {
  try {
    const response = await api.patch(`/api/users/${userId}`, userData);
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
    const response = await api.post(`/api/users/${userId}/addresses`, address);
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
    const response = await api.get(`/api/users/${userId}/addresses`);
    return response.data;
  } catch (error) {
    console.error('Error getting customer addresses:', error);
    throw error;
  }
};
