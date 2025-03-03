import { CustomerInfo, CustomerAddress } from '../types/customer';
import { api } from '@/api/api';

export const customerService = {
  async saveCustomerInfo(customerInfo: CustomerInfo) {
    try {
      const response = await api.post('/customers', customerInfo);
      return response.data;
    } catch (error) {
      console.error('Error saving customer info:', error);
      throw error;
    }
  },

  async saveCustomerAddress(address: CustomerAddress) {
    try {
      const response = await api.post('/customers/addresses', address);
      return response.data;
    } catch (error) {
      console.error('Error saving customer address:', error);
      throw error;
    }
  },

  async getCustomerAddresses() {
    try {
      const response = await api.get('/customers/addresses');
      return response.data;
    } catch (error) {
      console.error('Error getting customer addresses:', error);
      throw error;
    }
  },
};
