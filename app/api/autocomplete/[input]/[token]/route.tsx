import { NextResponse } from 'next/server';

export async function GET(request: Request, params: any) {
  const { input, token } = params.params;
  try {
    const response = await fetch(`https://places.googleapis.com/v1/places:autocomplete`, {
      method: 'POST',
      headers: {
        'Accept-Language': 'en',
        'Content-Type': 'application/json',
        sessionToken: token,
        'X-Goog-Api-Key': String(process.env.GOOGLE_MAPS_KEY),
      },
      body: JSON.stringify({ input: input }),
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
