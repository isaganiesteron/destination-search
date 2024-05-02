import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const users = await sql`SELECT * FROM Users WHERE Email=${email};`;
  return NextResponse.json(users, { status: 200 });
}
