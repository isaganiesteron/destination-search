import { NextResponse } from 'next/server';

export async function GET(request: Request, params: any) {
  const { type, input, token } = params.params;
  try {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=${type}&sessiontoken=${token}&key=${process.env.GOOGLE_MAPS_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
