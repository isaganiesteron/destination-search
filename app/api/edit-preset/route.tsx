import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { name, fetchSettingPreset, settingPreset } = data;

  try {
    if (!name || !fetchSettingPreset || !settingPreset)
      throw new Error('Preset ID, Fetch Settings and Settings required');

    const edit =
      await sql`UPDATE Presets SET FetchSettings = ${fetchSettingPreset}, Settings = ${settingPreset} WHERE ID = ${name};`;
    return NextResponse.json(edit);
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
