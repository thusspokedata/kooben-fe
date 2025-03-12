/**
 * Format address fields with default empty strings
 */
export const formatAddress = (
  addressData: Partial<{
    address?: string;
    zipCode?: string;
    city?: string;
    province?: string;
    phone?: string;
  }>
) => ({
  address: addressData.address || '',
  zipCode: addressData.zipCode || '',
  city: addressData.city || '',
  province: addressData.province || '',
  phone: addressData.phone || '',
});
