import { NextResponse } from 'next/server';

export async function GET(request: Request, params: any) {
  const { nextpage, location, radius } = params.params;
  try {
    const parameter =
      nextpage !== 'null'
        ? `pagetoken=${nextpage}`
        : `location=${location}&radius=${radius ? radius : '500'}&type=lodging`;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${parameter}&key=${process.env.GOOGLE_MAPS_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
