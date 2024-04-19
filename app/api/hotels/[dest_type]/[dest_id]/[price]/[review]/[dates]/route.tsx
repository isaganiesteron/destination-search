import fetchApi from '@/utils/fetchApi';
import { NextResponse } from 'next/server';
import moment from 'moment';
import chunkArray from '@/utils/chunkArray';
// import tempHotelPricesAndDetails from "@/mock_data/hotels"

const _chunkArray = (array: any[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const _combinePricesAndDetails = (details: object[], prices: object[]) => {
  const detailsAndPrices = details.map((detail: object) => {
    let tempDetail = { ...detail };
    let currentPrice = prices.filter((price: object) => {
      return price['id' as keyof typeof price] === detail['id' as keyof typeof price];
    });
    const priceObject = currentPrice.length === 1 ? currentPrice[0] : null;
    if (priceObject) {
      tempDetail = {
        ...tempDetail,
        price: priceObject
          ? {
              currency: priceObject['currency' as keyof typeof priceObject],
              price: priceObject['price' as keyof typeof priceObject],
            }
          : 'NA',
      };
    } else {
      tempDetail = { ...tempDetail, price: 'NA' };
    }
    return tempDetail;
  });

  return detailsAndPrices;
};

const _fetchHotelPrices = async (
  type: string,
  id: string,
  price: string,
  review: string,
  dates: string,
  page: string
) => {
  const checkin = dates.split('_')[0];
  const checkout = dates.split('_')[1];
  const min_price = price.split('_')[0];
  const max_price = price.split('_')[1];

  let requestBody: {
    booker: { country: string; platform: string };
    currency: string;
    checkin: string;
    checkout: string;
    extras: string[];
    guests: { number_of_adults: number; number_of_rooms: number };
    price?: { minimum: number; maximum: number };
    rating?: { minimum_review_score: number };
  } = {
    booker: {
      country: 'nl',
      platform: 'desktop',
    },
    currency: 'USD',
    checkin: moment(checkin).format('YYYY-MM-DD'),
    checkout: moment(checkout).format('YYYY-MM-DD'),
    extras: ['extra_charges', 'products'],
    guests: {
      number_of_adults: 2,
      number_of_rooms: 1,
    },
  };

  if (price !== 'null' && review !== 'null') {
    requestBody = {
      ...requestBody,
      price: { minimum: parseInt(min_price), maximum: parseInt(max_price) },
      rating: {
        minimum_review_score: parseInt(review),
      },
    };
  }

  console.log(requestBody);

  let updatedRequestBody: object = {};
  if (page !== 'null') {
    updatedRequestBody = { page };
  } else {
    if (type === 'airport') {
      updatedRequestBody = { ...requestBody, airport: Number(id) };
    } else if (type === 'city') {
      updatedRequestBody = { ...requestBody, city: Number(id) };
    } else if (type === 'country') {
      updatedRequestBody = { ...requestBody, country: Number(id) };
    } else if (type === 'district') {
      updatedRequestBody = { ...requestBody, district: Number(id) };
    } else if (type === 'landmark') {
      updatedRequestBody = { ...requestBody, landmark: Number(id) };
    } else if (type === 'region') {
      updatedRequestBody = { ...requestBody, region: Number(id) };
    }
  }
  const hotelSearch = await fetchApi('/accommodations/search', updatedRequestBody);
  return hotelSearch;
};

const _fetchHotelDetails = async (hotelIds: number[]) => {
  /**
   * Hotel hoteIds here will most probably be an array of 100 hotels already because
   * _fetchHotelPrices is ran on a per page basis. BUT just in case it's split into
   * 100 hotels per request.
   *
   * It's also unlikely BUT it's possible that this could have a next_page as well.
   */

  const splitArray = chunkArray(hotelIds); // Note: change 2 to 100 after testing
  console.log(`     _fetchHotelDetails: There will be ${splitArray.length} requests.`);

  let allHotelDetails: object[] = [];
  let requestCount = 0;

  while (requestCount < splitArray.length) {
    let next_page = '';
    let fetchingDone = false;
    console.log(`     Fetching details for ${splitArray[requestCount].length} hotels.`);
    while (!fetchingDone) {
      const requestBody =
        next_page === ''
          ? {
              accommodations: splitArray[requestCount],
              extras: ['description', 'photos', 'facilities', 'payment', 'policies', 'rooms'],
            }
          : { next_page };
      const rawData = await fetchApi('/accommodations/details', requestBody);
      if (rawData.next_page) next_page = rawData.next_page;
      else fetchingDone = true;

      if (rawData.data) allHotelDetails.push(...rawData.data);
      else console.log('Error fetching hotel details');
    }
    requestCount++;
  }
  return allHotelDetails;
};

export async function GET(request: Request, params: any) {
  const { dest_type, dest_id, price, review, dates } = params.params;
  // If next_page exists then that means remove all params and just use next_page

  let next_page = dest_type && dest_id === 'null' && price === 'null' ? dest_type : 'null';

  try {
    console.log(`****Fetching hotel prices...`);
    const hotelPrices = await _fetchHotelPrices(
      dest_type,
      dest_id,
      price,
      review,
      dates,
      next_page
    );
    console.log(`... DONE Fetching hotel prices.`);

    console.log('Fetching hotel details...');
    const hotelDetails = await _fetchHotelDetails(
      hotelPrices?.data.map((x: { id: number }) => x.id)
    );
    console.log('... DONE Fetching hotel details.');

    console.log('****Combining prices and details...');
    const hotelPricesAndDetails = await _combinePricesAndDetails(hotelDetails, hotelPrices?.data);
    console.log('... DONE Combining prices and details.');

    console.log('');
    console.log('');
    console.log(`****Done fetching ${hotelPricesAndDetails.length} hotels****`);
    return NextResponse.json({
      data: hotelPricesAndDetails,
      next_page: hotelPrices.next_page ? hotelPrices.next_page : null,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
