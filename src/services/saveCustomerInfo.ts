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
      throw new Error('clerkId is required');
    }

    // Ensure we're sending exactly the expected format
    const userDataToSend = {
      clerkId: userData.clerkId,
      email: userData.email || '',
      name: userData.name || '',
    };

    const response = await api.post('/users/sync', userDataToSend);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Backend error details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
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
    const response = await api.patch(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

/**
 * Save customer address - use the dedicated address endpoints
 */
export const saveCustomerAddress = async (userId: string, address: CustomerAddress) => {
  try {
    // Create payload for the API call
    const addressToSave = {
      address: address.address,
      zipCode: address.zipCode,
      city: address.city,
      province: address.province,
      phone: address.phone || null,
      isDefault: true,
    };

    // First, check if the user already has addresses
    const existingAddresses = await getCustomerAddresses(userId);

    if (existingAddresses && existingAddresses.length > 0) {
      // Update the first address (which should be the default one)
      const addressId = existingAddresses[0].id;
      const response = await api.put(`/users/${userId}/addresses/${addressId}`, addressToSave);
      return response.data;
    } else {
      // Create a new address
      const response = await api.post(`/users/${userId}/addresses`, addressToSave);
      return response.data;
    }
  } catch (error) {
    console.error('Error saving address:', error);
    throw error;
  }
};

/**
 * Get customer addresses using the dedicated address endpoint
 */
export const getCustomerAddresses = async (userId: string) => {
  try {
    const response = await api.get(`/users/${userId}/addresses`);
    return response.data as CustomerAddress[];
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return []; // No addresses found
    }
    console.error('Error getting addresses:', error);
    throw error;
  }
};
