import { NextResponse } from 'next/server';
import { userStore } from '@/store/users';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const userData = await request.json();

    console.log('[API ROUTE] /users/sync received user data:', userData);

    // Basic validation
    if (!userData || !userData.clerkId) {
      console.error('[API ROUTE] Missing required field: clerkId');
      return NextResponse.json({ error: 'Missing required field: clerkId' }, { status: 400 });
    }

    // Save or update the user in our store
    const user = userStore.addUser(userData);

    console.log('[API ROUTE] User saved/updated:', user);

    // Return the created/updated user
    return NextResponse.json(user);
  } catch (error) {
    console.error('[API ROUTE] Error processing request:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function GET(request: Request) {
  // Get URL parameters
  const { searchParams } = new URL(request.url);
  const clerkId = searchParams.get('clerkId');

  if (clerkId) {
    // Find a specific user by clerkId
    const user = userStore.getUserByClerkId(clerkId);

    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  }

  // Return all users
  return NextResponse.json(userStore.getAllUsers());
}
