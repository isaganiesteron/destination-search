import fetchApi from '@/utils/fetchApi';
import { NextResponse } from 'next/server';

export async function GET(request: Request, params: any) {
  const { nextpage, dest_type, dest_id } = params.params;
  try {
    let requestBody: object = {};
    if (nextpage !== 'null') {
      console.log('!!!nextpage', nextpage);
      requestBody = { next_page: nextpage };
    } else if (dest_type === 'airport') {
      requestBody = { airport: Number(dest_id) };
    } else if (dest_type === 'city') {
      requestBody = { city: Number(dest_id) };
    } else if (dest_type === 'country') {
      requestBody = { country: Number(dest_id) };
    } else if (dest_type === 'district') {
      requestBody = { district: Number(dest_id) };
    } else if (dest_type === 'landmark') {
      requestBody = { landmark: Number(dest_id) };
    } else if (dest_type === 'region') {
      requestBody = { region: Number(dest_id) };
    }
    const rawData = await fetchApi('/common/locations/districts', requestBody);

    if (rawData.data) {
      const disctricts = rawData.data.map((district) => {
        return {
          id: district.id,
          name: district.name['en-gb' as keyof typeof district.name],
        };
      });
      return NextResponse.json({
        data: disctricts,
        next_page: rawData.next_page ? rawData.next_page : null,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
