'use server';

import { errorHandler, Unauthorized } from '@/utils';
import { cookies } from 'next/headers';

export default async function getUsers() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${apiUrl}auth/`, {
      headers: {
        Cookie: cookies().toString(),
      },
    });

    if (!res.ok) {
      throw Unauthorized('No autorizado');
    }

    return await res.json();
  } catch (error) {
    throw errorHandler(error);
  }
}
