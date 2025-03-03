import { api } from '@/api/api';
import { CustomerInfo, CustomerAddress } from '@/interfaces';
import { AxiosError } from 'axios';

export const saveCustomerInfo = async (customerInfo: CustomerInfo) => {
  try {
    if (!customerInfo.clerkId) {
      throw new Error('clerkId is required');
    }
    const response = await api.post('/customers', customerInfo);
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

export const saveCustomerAddress = async (address: CustomerAddress) => {
  try {
    const response = await api.post('/customers/addresses', address);
    return response.data;
  } catch (error) {
    console.error('Error saving customer address:', error);
    throw error;
  }
};

export const getCustomerAddresses = async () => {
  try {
    const response = await api.get('/customers/addresses');
    return response.data;
  } catch (error) {
    console.error('Error getting customer addresses:', error);
    throw error;
  }
};
