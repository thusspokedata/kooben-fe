import { NextResponse } from 'next/server';
import { userStore } from '@/store/users';

export async function GET(request: Request, { params }: { params: { clerkId: string } }) {
  try {
    const clerkId = params.clerkId;
    console.log('[API ROUTE] Looking for user with clerkId:', clerkId);

    if (!clerkId) {
      return NextResponse.json({ error: 'Missing clerkId parameter' }, { status: 400 });
    }

    // Find user in our shared store
    const user = userStore.getUserByClerkId(clerkId);

    if (user) {
      console.log('[API ROUTE] User found:', user);
      return NextResponse.json(user);
    } else {
      console.log('[API ROUTE] User not found');
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('[API ROUTE] Error processing request:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
