import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { name, user, fetchSettingPreset, settingPreset } = data;

  try {
    if (!name || !user || !fetchSettingPreset || !settingPreset)
      throw new Error('Email, Name and Picture URL required');

    const add =
      await sql`INSERT INTO Presets (Email, ID, FetchSettings, Settings) VALUES (${user}, ${name}, ${JSON.stringify(
        fetchSettingPreset
      )}, ${JSON.stringify(settingPreset)});`;
    return NextResponse.json(add);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
