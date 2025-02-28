import axios from 'axios';

// Usar la nueva variable de entorno con nombre diferente para evitar conflictos
const API_BASE_URL = process.env.NEXT_PUBLIC_KOOBEN_API_URL || 'https://api.kooben.cc/api/';

// Verificar qué valor se está usando (solo para depuración)
console.log('API_BASE_URL:', API_BASE_URL);

export const api = axios.create({
  baseURL: API_BASE_URL,
});
