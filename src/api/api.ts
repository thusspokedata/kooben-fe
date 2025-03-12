import axios from 'axios';

// Remove trailing slash to avoid double slashes in URLs
// const API_BASE_URL = 'http://localhost:3000/api';
const API_BASE_URL = process.env.NEXT_PUBLIC_KOOBEN_API_URL || 'https://api.kooben.cc/api';

// Create an Axios instance with minimal configuration
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});
