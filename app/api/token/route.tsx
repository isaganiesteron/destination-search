// This is an example of how to read a JSON Web Token from an API route
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(request: NextRequest) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req: request });
  if (token) return NextResponse.json(token);
  else return NextResponse.json({ status: 401 });
}
