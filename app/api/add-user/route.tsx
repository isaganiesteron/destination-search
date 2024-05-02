import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  const name = searchParams.get('name');
  const url = searchParams.get('url');

  try {
    if (!email || !name || !url) throw new Error('Email, Name and Picture URL required');
    await sql`INSERT INTO Users (Email, Name, Picture) VALUES (${email}, ${name}, ${url});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pets = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ pets }, { status: 200 });
}
