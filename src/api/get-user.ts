import { cookies } from 'next/headers';

export default async function getUsers() {
  const res = await fetch('http://localhost:3000/api/auth/', {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  return res.json();
}
