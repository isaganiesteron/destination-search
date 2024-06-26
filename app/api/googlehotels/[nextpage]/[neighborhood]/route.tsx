import { NextResponse } from 'next/server';

export async function GET(request: Request, params: any) {
  const { nextpage, neighborhood } = params.params;
  try {
    const parameter =
      nextpage !== 'null' ? `pagetoken=${nextpage}` : `query=hotels%20in%20${neighborhood}`;
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?${parameter}&key=${process.env.GOOGLE_MAPS_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
