import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const users = await sql`DELETE FROM Presets WHERE ID=${id};`;
  return NextResponse.json(users, { status: 200 });
}
