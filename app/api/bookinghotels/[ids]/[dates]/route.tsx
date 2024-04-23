import moment from 'moment';
import { NextResponse } from 'next/server';
import fetchApi from '@/utils/fetchApi';
import chunkArray from '@/utils/chunkArray';

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

const _fetchHotelPrices = async (ids: number[], dates: string) => {
  const checkin = dates.split('_')[0];
  const checkout = dates.split('_')[1];

  let requestBody: {
    booker: { country: string; platform: string };
    accommodations: number[];
    currency: string;
    checkin: string;
    checkout: string;
    extras: string[];
    guests: { number_of_adults: number; number_of_rooms: number };
  } = {
    booker: {
      country: 'nl',
      platform: 'desktop',
    },
    accommodations: ids,
    currency: 'USD',
    checkin: moment(checkin).format('YYYY-MM-DD'),
    checkout: moment(checkout).format('YYYY-MM-DD'),
    extras: ['extra_charges', 'products'],
    guests: {
      number_of_adults: 2,
      number_of_rooms: 1,
    },
  };

  // console.log(requestBody);

  const hotelSearch = await fetchApi('/accommodations/search', requestBody);
  return hotelSearch;
};

const _fetchHotelDetails = async (hotelIds: number[]) => {
  /**
   * ***THIS IS EXACTLY THE SAME AS THE hotels API endpoint
   *
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
  const { ids, dates } = params.params;
  try {
    const hotelLists: number[] = ids.split(',').map((x: string) => parseInt(x));

    console.log(`****Fetching hotel prices...`);
    const hotelPrices = await _fetchHotelPrices(hotelLists, dates);
    console.log(`... DONE Fetching hotel prices.`);

    console.log('Fetching hotel details...');
    const hotelDetails = await _fetchHotelDetails(hotelLists);
    console.log('... DONE Fetching hotel details.');

    console.log('****Combining prices and details...');
    const hotelPricesAndDetails = await _combinePricesAndDetails(hotelDetails, hotelPrices?.data);
    console.log('... DONE Combining prices and details.');

    console.log('');
    console.log('');
    console.log(`****Done fetching ${hotelPricesAndDetails.length} hotels****`);

    return NextResponse.json({
      data: hotelPricesAndDetails,
      next_page: null,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
