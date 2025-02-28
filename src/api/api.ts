import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_KOOBEN_API_URL || 'https://api.kooben.cc/api/';

export const api = axios.create({
  baseURL: API_BASE_URL,
});
