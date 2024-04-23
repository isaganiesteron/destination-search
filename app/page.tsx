'use client';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import chunkArray from '@/utils/chunkArray';
import similarity from '@/utils/similarity';

// coponents
import ResultItem from '@/components/ResultItem';
import Settings from '@/components/Settings';
import Spinner from '@/components/Spinner';
import SuggestedItem from '@/components/SuggestedItem';
import DateDialog from '@/components/DateDialog';
import Districts from '@/components/Districts';

// constants
import { Settings as I_Settings } from '@/constants/interfaces';
import { hotelTypes } from '@/constants/accommodationtypes';
// import accommodations from '@/mock_data/accommodations';

const Page = () => {
  const [status, setStatus] = useState<object>({
    loading: false,
    message: '',
  });
  const [hotelStatus, setHotelStatus] = useState<object>({
    loading: false,
    message: '',
  });
  const [flatStatus, setFlatStatus] = useState<object>({
    loading: false,
    message: '',
  });

  const [googleFetchingAccommodations, setGoogleFetchingAccommodations] = useState<boolean>(false);

  const [neighborhoodInput, setNeighborhoodInput] = useState<string>('');
  const [allFetchedAccommodations, setAllFetchedAccommodations] = useState<any[]>([]);
  const [allCommonAccommodations, setAllCommonAccommodations] = useState<any[]>([]);
  const [allGoogleAccommodations, setAllGoogleAccommodations] = useState<any[]>([]);
  const [currentAllHotels, setCurrentAllHotels] = useState<any[]>([]);
  const [currentAllFlats, setCurrentAllFlats] = useState<any[]>([]);
  const [currentDistricts, setCurrentDistricts] = useState<object[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<number[]>([]);
  const [selectedStars, setSelectedStars] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const [selectedSources, setSelectedSources] = useState<number[]>([0, 1, 2]);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const [destination, setDestination] = useState<string>('');
  const [suggestions, setSuggestions] = useState<object[]>([]);
  const [currentDestination, setCurrentDestination] = useState<object>({
    type: 'null',
    id: 'null',
    label: 'null',
  });
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const [displayedDates, setDisplayedDates] = useState<string>('');
  const [dateDialogValues, setDateDialogValues] = useState<object>({
    duration: 'day',
    monthYear: `${moment().format('MMM')}${moment().format('YYYY')}`,
  });
  const [currentDates, setCurrentDates] = useState<object>({
    checkin: 'null',
    checkout: 'null',
  });

  const [currentTier, setCurrentTier] = useState<string>('budget');
  const [settings, setSettings] = useState<I_Settings>({
    review: 8.3,
    consider_review_quantity: true,
    tier: 'budget',
    hoteltypes: hotelTypes,
    facilities: [], // check none by default
    apartmenttypes: ['201'],
    fetchMultiplePrices: false,
    budget: {
      min_price: 0,
      max_price: 100,
      conditions: {},
    },
    midrange: {
      min_price: 100,
      max_price: 200,
      conditions: {},
    },
    luxury: {
      min_price: 200,
      max_price: 20000,
      conditions: {},
    },
  });

  // the new settings will be like this instead of just 1 object
  // the only object will be the price tier and review filter
  const [showFlats, setShowFlats] = useState(true);
  const [showTopTen, setshowTopTen] = useState(true);
  const [ignorePriceAndRating, setIgnorePriceAndRating] = useState<boolean>(false);
  const [googleSearchLog, setGoogleSearchLog] = useState<string>('');

  const fetchSuggestions = async (query: string) => {
    const response = await fetch('/api/autosuggest/' + query);
    if (response.status === 200) {
      const data = await response.json();
      setSuggestions(data);
    }
  };

  const fetchDistricts = async () => {
    const destinationType = currentDestination['type' as keyof typeof currentDestination];
    const destinationId = currentDestination['id' as keyof typeof currentDestination];

    let nextPageToken = '';
    let fetchingDone = false;
    let fetchedDistricts: any[] = [{ id: 0, name: 'No District' }];

    while (!fetchingDone) {
      const response: any = await fetch(
        nextPageToken
          ? `/api/district/${nextPageToken}/null/null`
          : `/api/district/null/${destinationType}/${destinationId}`
      );
      const responseJson = await response.json();

      if (responseJson) {
        if (responseJson.next_page_token) {
          nextPageToken = responseJson.next_page_token;
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Without a pause the next fetch will return INVALID_REQUEST
        } else {
          fetchingDone = true;
        }
        if (responseJson.data) {
          if (Array.isArray(responseJson.data)) {
            fetchedDistricts.push(...responseJson.data);
          } else {
            console.log('ERROR: responseJson.data is not an array');
            console.log(responseJson.data);
          }
        } else {
          console.log('ERROR: no data found');
          console.log(responseJson);
          fetchingDone = true;
        }
      } else {
        console.log('ERROR: no districts found');
        console.log(responseJson);
        fetchingDone = true;
      }
    }
    setCurrentDistricts(fetchedDistricts);

    // **use mock data
    // setCurrentDistricts(require("@/mock_data/districts").default);
  };

  const commonAccommodations = async (
    googleHotels: any[] | undefined,
    bookingHotels: any[] | undefined
  ) => {
    if (!googleHotels || !bookingHotels) return;

    // let nomatches: any[] = [];
    let commonHotels: any[] = [];
    bookingHotels.forEach((bookingHotel) => {
      const bookingHotelName = bookingHotel.name['en-gb'];
      googleHotels.forEach((googleHotel) => {
        const googleHotelName = googleHotel.name;
        const similarityPercentage: number = similarity(googleHotelName, bookingHotelName);

        if (similarityPercentage > 85) {
          // make sure that this accommodation is included as a hotel or flat
          const isIncludedHotel = settings.hoteltypes.includes(
            String(bookingHotel.accommodation_type)
          );
          const isIncludedFlat = settings.apartmenttypes.includes(
            String(bookingHotel.accommodation_type)
          );

          if (isIncludedHotel || isIncludedFlat)
            commonHotels.push({ ...bookingHotel, google_data: googleHotel });
        } else {
          // nomatches.push({
          //   google: googleHotelName,
          //   booking: bookingHotelName,
          //   similarity: similarityPercentage,
          // });
        }
      });
    });
    // console.log(JSON.stringify(nomatches));

    return commonHotels;
  };

  const fetchGoogleAccommodations = async (neighborhood: string) => {
    if (neighborhood === '') return;
    setGoogleFetchingAccommodations(true);
    setAllCommonAccommodations([]);
    setAllGoogleAccommodations([]);
    setGoogleSearchLog('');

    // The 3 below are important because we need to show users ONLY common hotels, ignore filtering with districts AND show more than 10 results
    setSelectedSources([2]);
    setSelectedDistricts(
      currentDistricts.map((district) => district['id' as keyof typeof district])
    );
    setshowTopTen(false);

    /**
     * *****START: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****START: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****START: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****START: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     */

    let currentLogs = '';
    let fetchedHotels: any[] = [];

    currentLogs += `Searching Google Maps for hotels in ${neighborhood}...\n`;
    setGoogleSearchLog(currentLogs);

    let nextPageToken = null;
    let fetchingDone = false;

    while (!fetchingDone) {
      const response: any = await fetch(
        nextPageToken
          ? `/api/googlehotels/${nextPageToken}/null`
          : `/api/googlehotels/null/${neighborhood}`
      );
      const data = await response.json();
      if (data) {
        if (data.next_page_token) {
          nextPageToken = data.next_page_token;
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Without a pause the next fetch will return INVALID_REQUEST
        } else {
          fetchingDone = true;
        }
        fetchedHotels = [...fetchedHotels, ...data.results];
      } else {
        console.log('ERROR: no places found');
        console.log(data);
        fetchingDone = true;
      }
    }

    currentLogs += `Found ${fetchedHotels.length} hotels in ${neighborhood}...\n`;
    setGoogleSearchLog(currentLogs);

    // sort fetchedHotels by name field
    fetchedHotels.sort((a, b) => a.name.localeCompare(b.name));

    /**
     * *****END: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****END: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****END: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****END: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     */

    // console.log('****USING MOCK DATA****');
    // const fetchedHotels = require('@/mock_data/googlehotels').default;

    // Intersect all accommodations with google accommodations here
    const allCommonAccommodations: any = await commonAccommodations(
      fetchedHotels,
      allFetchedAccommodations
    );

    currentLogs += `Matched ${allCommonAccommodations.length} Google Maps Hotels to ${
      allFetchedAccommodations.length
    } fetched Booking.com hotels...\nSearching booking.com for ${
      fetchedHotels.length - allCommonAccommodations.length
    } Google Maps Hotels with no match...`;
    setGoogleSearchLog(currentLogs);

    setAllCommonAccommodations(allCommonAccommodations);

    const allCommonAccommodationsGoogleId = allCommonAccommodations.map(
      (x: { google_data: { place_id: any } }) => x.google_data.place_id
    );

    const fetchedHotelsNoMatch = fetchedHotels.filter(
      (x: { place_id: any }) => !allCommonAccommodationsGoogleId.includes(x.place_id)
    );

    const convertedFetchedHotels: any = convertGoogleHotels(fetchedHotels, neighborhood);

    setAllGoogleAccommodations(convertedFetchedHotels);

    const fetchBookingAccommodationsLogs = await fetchBookingAccommodations(
      allCommonAccommodations,
      fetchedHotelsNoMatch
    );

    currentLogs += fetchBookingAccommodationsLogs;
    setGoogleSearchLog(currentLogs);

    setGoogleFetchingAccommodations(false);
  };

  const fetchBookingAccommodations = async (
    allCommonAccommodations: any[],
    accommodations: any[]
  ) => {
    let logs = '';
    const accommodationNames = accommodations.map((x: { name: any }) => x.name);
    // console.log(`Searching Booking.com for ${accommodationNames.length} hotels.`);

    // first get the accommodation id of all hotels based on their names
    let allAccommodationsFetched: any[] = [];
    let accommodationCounter = 0;
    // console.log(`Fetching for booking destination ID based on hotel name...`);
    while (accommodationCounter < accommodationNames.length) {
      console.log(`Find dest_id => ${accommodationNames[accommodationCounter]}`);
      const response = await fetch('/api/autosuggest/' + accommodationNames[accommodationCounter]);
      if (response.status === 200) {
        const data = await response.json();

        const currentData = data?.length > 0 ? data[0] : null;

        logs += `\n${accommodationCounter + 1}. ${accommodationNames[accommodationCounter]} ${
          currentData ? '✅' : '❌'
        }`;

        allAccommodationsFetched = [
          ...allAccommodationsFetched,
          { name: accommodationNames[accommodationCounter], data: currentData },
        ];
      } else {
        console.log('ERROR: no response');
        console.log(response);
      }
      accommodationCounter++;
      // setGoogleSearchLog(logs);
    }

    logs += `\nFound Destination ID for ${
      allAccommodationsFetched.filter((x) => x.data).length
    } Google Hotels with no matches...\nSearching Booking.com for ${
      allAccommodationsFetched.filter((x) => x.data).length
    } accommodations...`;

    console.log(`Done Fetching booking destination ID's...`);
    // get all accommodation ids. First check if data is null
    const allAccommodationIds = allAccommodationsFetched
      .filter((x) => x.data !== null)
      .map((x) => x.data.dest_id);

    // fetch all accommodations in Booking.com API

    const dateCheckin = currentDates['checkin' as keyof typeof currentDates];
    const dateCheckout = currentDates['checkout' as keyof typeof currentDates];

    const checkin =
      dateCheckin === 'null'
        ? moment().format('YYYY-MM-DD')
        : moment(dateCheckin, 'YYYY-MM-DD').format('YYYY-MM-DD');
    const checkout =
      dateCheckout === 'null'
        ? moment().add(1, 'days').format('YYYY-MM-DD')
        : moment(dateCheckout, 'YYYY-MM-DD').format('YYYY-MM-DD');

    console.log(
      `Fetching bulk accommodation details for all ${allAccommodationIds.length} booking destination IDs...`
    );
    const response = await fetch(
      `/api/bookinghotels/${allAccommodationIds.join(',')}/${checkin}_${checkout}`
    );
    const responseJson = await response.json();
    if (responseJson.data) {
      const currentNewCommonAccommodations = responseJson.data.map((bookingAccommodation: any) => {
        const currentAccommodation = allAccommodationsFetched.find((x) => {
          if (x.data !== null) return x.data.dest_id === String(bookingAccommodation.id);
          return false;
        });
        if (currentAccommodation) {
          const googleHotel = accommodations.find((x) => x.name === currentAccommodation.name);

          return { ...bookingAccommodation, google_data: googleHotel };
        } else {
          return { ...bookingAccommodation, google_data: null };
        }
      });

      const allAccommodationsFetchedWithPrice = addMultiplePrices(
        currentNewCommonAccommodations,
        null
      );

      const currentUniqueAccommodations = allAccommodationsFetchedWithPrice.filter(
        (accommodation) => {
          return !allFetchedAccommodations.some((existingAccommodation) => {
            return existingAccommodation.id === accommodation.id;
          });
        }
      );

      logs += `\nFound ${currentUniqueAccommodations.length} out of ${
        allAccommodationsFetched.filter((x) => x.data).length
      } accommodations on booking.com.`;
      setAllFetchedAccommodations([...allFetchedAccommodations, ...currentUniqueAccommodations]);
      setAllCommonAccommodations([
        ...allCommonAccommodations,
        ...allAccommodationsFetchedWithPrice,
      ]);
    }
    return logs;
  };

  const fetchAccommodations = async () => {
    // console.time('fetchAccommodations');
    // first check if currentDestination is set, if not then just return
    const destinationType = currentDestination['type' as keyof typeof currentDestination];
    const destinationId = currentDestination['id' as keyof typeof currentDestination];
    const destinationLabel = currentDestination['label' as keyof typeof currentDestination];

    if (destinationType === 'null' || destinationId === 'null') return;
    resetVariablesAndStatus();

    // declare variables
    const tierSettings = settings[settings.tier as keyof typeof settings];
    const minPrice = tierSettings['min_price' as keyof typeof tierSettings];
    const maxPrice = tierSettings['max_price' as keyof typeof tierSettings];
    const review = ignorePriceAndRating ? 'null' : settings.review;

    const dateCheckin = currentDates['checkin' as keyof typeof currentDates];
    const dateCheckout = currentDates['checkout' as keyof typeof currentDates];

    const checkin =
      dateCheckin === 'null'
        ? moment().format('YYYY-MM-DD')
        : moment(dateCheckin, 'YYYY-MM-DD').format('YYYY-MM-DD');
    const checkout =
      dateCheckout === 'null'
        ? moment().add(1, 'days').format('YYYY-MM-DD')
        : moment(dateCheckout, 'YYYY-MM-DD').format('YYYY-MM-DD');

    setStatus({
      loading: true,
      message: `Booking.com: Fetch all accommodations in ${destinationLabel} (${destinationType}) with a maximum price of ${maxPrice} with a minumum review of ${review}`,
    });

    /**
     * *****START: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****START: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****START: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****START: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     */

    // fetch all accommodations in Booking.com API
    let allAccommodationsFetched: any[] = [];
    let morePages = true;
    let nextPage = '';
    while (morePages) {
      const currentDestinationType = nextPage === '' ? destinationType : nextPage;
      const currentDestinationId = nextPage === '' ? destinationId : 'null';
      const currentPriceRange =
        nextPage === '' ? (ignorePriceAndRating ? 'null' : `${minPrice}_${maxPrice}`) : 'null';

      const fetchString = `/api/hotels/${currentDestinationType}/${currentDestinationId}/${currentPriceRange}/${review}/${checkin}_${checkout}`;
      const response = await fetch(fetchString); // maxPrice is in USD
      const responseJson = await response.json();
      if (responseJson.data) {
        allAccommodationsFetched.push(...responseJson.data);
      }
      if (responseJson.next_page) {
        nextPage = responseJson.next_page;
        ``;
        setStatus({
          loading: true,
          message: `Fetched ${allAccommodationsFetched.length} hotels so far. Fetching more...`,
        });
        // pause for 1 second before next request
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        nextPage = '';
        morePages = false;
      }
    }

    // const allAccommodationsFetchedWithFacilities = allAccommodationsFetched;
    // filter results by saved facilities here
    const allAccommodationsFetchedWithFacilities = allAccommodationsFetched.filter(
      (accommodation) => {
        const facilitiesAreIncluded = accommodation.facilities.filter((x: any) => {
          return settings.facilities.includes(x.id);
        });
        return facilitiesAreIncluded.length === settings.facilities.length;
      }
    );
    if (allAccommodationsFetchedWithFacilities.length === 0) {
      setStatus({
        loading: false,
        message: `Fetched 0 accommodations in ${destinationLabel} (${destinationType}) with a maximum price of ${maxPrice} with a minumum review of ${review} with facilities selected.`,
      });
      console.log('----Done Fetching Hotels----');
      return;
    }
    //add multiple prices here
    let allAccommodationsFetchedWithMultiplePrice = addMultiplePrices(
      allAccommodationsFetchedWithFacilities,
      null
    );

    if (settings.fetchMultiplePrices) {
      // Fetch multiple prices for next 5 months
      const accommodationExtraPrices: any[] = [];
      // This has to be 4 months ahead of the current month
      const monthsToFetchPrices = [];
      const currentMonth = moment().format('MMMM');
      monthsToFetchPrices.push(currentMonth);
      for (let i = 1; i <= 4; i++) {
        const nextMonth = moment().add(i, 'months').format('MMMM');
        monthsToFetchPrices.push(nextMonth);
      }

      let monthCounter = 0;
      let requestCounter = 0;
      while (monthCounter < monthsToFetchPrices.length) {
        console.log(`   ***Fetching prices for ${monthsToFetchPrices[monthCounter]}`);

        const isCurrentMonth = moment().format('MMMM') === monthsToFetchPrices[monthCounter];

        const checkin = isCurrentMonth
          ? moment()
          : moment().month(monthsToFetchPrices[monthCounter]).startOf('month');
        const checkout = isCurrentMonth
          ? moment().add(1, 'days')
          : moment().month(monthsToFetchPrices[monthCounter]).startOf('month').add(1, 'days');
        // api only allows accommodations of 100 ids
        const chunks = chunkArray(allAccommodationsFetched);

        let chunkCount = 0;
        console.log(`       Will fetch ${chunks.length} chunks`);

        while (chunkCount < chunks.length) {
          setStatus({
            loading: true,
            message: `Fetching Prices for ${monthsToFetchPrices[monthCounter]} (${monthCounter}/${monthsToFetchPrices.length} months). Processing ${chunkCount}/${chunks.length} requests.`,
          });

          const allIdsParam = chunks[chunkCount].map((x) => x.id).join(',');
          const response = await fetch(
            `/api/prices/${allIdsParam}/${checkin.format('YYYY-MM-DD')}/${checkout.format(
              'YYYY-MM-DD'
            )}`
          );
          requestCounter++;
          const responseJson = await response.json();
          if (responseJson.data) accommodationExtraPrices.push(responseJson.data);
          else {
            console.log('         No Data Found for this chunk, moving on...');
            console.log(responseJson);
          }
          // pause for 1 second before next request
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if (requestCounter % 5 === 0) {
            // pause an extra 5 seconds every 5 requests
            await new Promise((resolve) => setTimeout(resolve, 5000));
          }
          chunkCount++;
        }
        monthCounter++;
      }
      accommodationExtraPrices.forEach((month) => {
        allAccommodationsFetchedWithMultiplePrice = addMultiplePrices(
          allAccommodationsFetchedWithMultiplePrice,
          month
        );
      });
    } else {
      console.log('*******skipping multiple prices********');
    }

    /**
     * *****END: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****END: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****END: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     * *****END: COMMENT OUT STARTING FROM HERE IF USING MOCK DATA
     */

    // // mock data
    // let allAccommodationsFetchedWithMultiplePrice: any[] = [];
    // allAccommodationsFetchedWithMultiplePrice = require('@/mock_data/accommodations').default;

    // This errors out for some reason, I feel like it's because the addMultiplePrices function is still running and we're hitting a 429
    await fetchDistricts();

    // console.log('allAccommodationsFetchedWithMultiplePrice');
    // console.log(JSON.stringify(allAccommodationsFetchedWithMultiplePrice));

    // this is used to update the results based on district
    setAllFetchedAccommodations(allAccommodationsFetchedWithMultiplePrice);
    // get all districts from all fetched accommodations here

    // initially set the selected districtss
    // WILL RESOLVE BUG!!! include the accommodations with no districts or not found
    let tempSelectedDistricts: number[] = [...selectedDistricts];
    allAccommodationsFetchedWithMultiplePrice.forEach((x: { location: { districts: any } }) => {
      const currentDiscrict = x.location.districts;
      if (currentDiscrict.length > 0) {
        currentDiscrict.forEach((district: number) => {
          if (tempSelectedDistricts.includes(district) === false)
            tempSelectedDistricts.push(district);
        });
      }
    });

    // differentiate  the different kinds of accommodations

    // Categorize the accommodations based on the type
    // const accommodationsIncluded =
    //   accommodation_type == 'hotels' ? settings.hoteltypes : settings.apartmenttypes;

    let hotelCount = 0;
    let flatCount = 0;
    let otherCount = 0;

    allAccommodationsFetchedWithMultiplePrice.forEach((x) => {
      if (settings.hoteltypes.includes(String(x.accommodation_type))) hotelCount++;
      else if (settings.apartmenttypes.includes(String(x.accommodation_type))) flatCount++;
      else otherCount++;
    });

    setSelectedDistricts(tempSelectedDistricts); // this will fire the useEffect where hotels are prepared
    setStatus({
      loading: false,
      message: `Fetched ${allAccommodationsFetchedWithMultiplePrice.length} accommodations. ${hotelCount} Hotels, ${flatCount} Flats and ${otherCount} other types. In ${destinationLabel} (${destinationType}) with a maximum price of ${maxPrice} with a minumum review of ${review}`,
    });
    console.log('----Done Fetching Hotels----');

    // console.timeEnd('fetchAccommodations');
  };

  const prepareResults = (allAccommodations: any[] | null, accommodation_type: string) => {
    if (allAccommodations === null) return;
    let currentStatusText = '';

    console.log(
      `Preparing results starting with ${allAccommodations.length} ${accommodation_type} items...`
    );

    // Categorize the accommodations based on the type
    const accommodationsIncluded =
      accommodation_type == 'hotels' ? settings.hoteltypes : settings.apartmenttypes;
    const specificAccommodations = allAccommodations.filter((x) => {
      if (x.place_id) return true; // automatically include google hotels
      return accommodationsIncluded.includes(String(x.accommodation_type));
    });
    console.log(
      `Filtered out ${
        allAccommodations.length - specificAccommodations.length
      } items that are not chosen accommodation types. ${
        specificAccommodations.length
      } remaining items.`
    );

    // If no accommodations are found return and let user know
    const tierSettings = settings[settings.tier as keyof typeof settings];
    const minPrice = tierSettings['min_price' as keyof typeof tierSettings];
    const maxPrice = tierSettings['max_price' as keyof typeof tierSettings];
    if (specificAccommodations.length === 0) {
      currentStatusText = `No ${accommodation_type} found in ${
        currentDestination['label' as keyof typeof currentDestination]
      }. With a minimum review of ${settings.review} and a price range of ${minPrice}-${maxPrice}.`;

      if (accommodation_type === 'hotels')
        setHotelStatus({ loading: false, message: currentStatusText });
      else setFlatStatus({ loading: false, message: currentStatusText });
      return [];
    }

    // Add rating info (just extra data in the the rating object)
    const accommodationsWithRating = addRatingInfo(specificAccommodations);

    // Filter by selected districts
    // const accommodationsFilteredByDistrict = accommodationsWithRating;
    const accommodationsFilteredByDistrict = accommodationsWithRating.filter(
      (x: { place_id: any; location: { districts: number[] } }) => {
        if (x.place_id) return true;
        if (x.location.districts.length === 0) {
          return selectedDistricts.includes(0); // include accommodations with no districts
        }

        let includeAccommodation = false;
        // check if the
        x.location.districts.forEach((district: number) => {
          // first check if the district is even in the list of fetched districts. If not, include the accommodation and add it to the list of Districts
          // if(currentDistricts.includes(district))
          const currentDistrictsIDs: number[] = currentDistricts.map(
            (dist) => dist['id' as keyof typeof dist]
          );

          if (!currentDistrictsIDs.includes(district))
            setCurrentDistricts([...currentDistricts, { id: district, name: 'Unknown' }]);
          if (selectedDistricts.includes(district)) includeAccommodation = true;
        });

        return includeAccommodation;
      }
    );
    console.log(
      `Filtered out ${
        accommodationsWithRating.length - accommodationsFilteredByDistrict.length
      } items based on districts. ${accommodationsFilteredByDistrict.length} remaining items.`
    );

    // Filter by selected stars
    const accommodationsFilteredByStars = accommodationsFilteredByDistrict.filter(
      (x: { name(name: any): any; id: number; place_id: number; rating: { stars: number } }) => {
        // filter by stars
        let starFilter = false;
        const roundedUpStars = Math.ceil(x.rating.stars); // this is for google hotels where it's possible to have stars that are not whole numbers
        const roundedDownStars = Math.floor(x.rating.stars); // this is for google hotels where it's possible to have stars that are not whole numbers
        if (x.rating.stars === null) starFilter = selectedStars.includes(0);
        starFilter =
          selectedStars.includes(roundedUpStars) || selectedStars.includes(roundedDownStars);
        return starFilter;
      }
    );
    console.log(
      `Filtered out ${
        accommodationsFilteredByDistrict.length - accommodationsFilteredByStars.length
      } items based on stars. ${accommodationsFilteredByStars.length} remaining items.`
    );

    // THERE IS A BUG HERE WHERE ITS FILTERING EVERYTHING OUT BECAUSE ITS NOT RECOGNIZING IT AS COMMON
    // The problem here is that allCommonAccommodations is not yet updated so it's not considering the common hotels
    // Filter by selected sources
    const accommodationsFilteredBySource = accommodationsFilteredByStars.filter((x: any) => {
      // filter by source
      let sourceFilter = false;
      const isCommonHotel = allCommonAccommodations.map((x: { id: any }) => x.id).includes(x.id)
        ? true
        : false;
      const isGoogleHotel = x.place_id ? true : false;
      if (!isGoogleHotel && !isCommonHotel) sourceFilter = selectedSources.includes(0);
      else if (isGoogleHotel && !isCommonHotel) sourceFilter = selectedSources.includes(1);
      else if (isCommonHotel) sourceFilter = selectedSources.includes(2);
      return sourceFilter;
    });
    console.log(
      `Filtered out ${
        accommodationsFilteredByStars.length - accommodationsFilteredBySource.length
      } items based on sources. ${accommodationsFilteredBySource.length} remaining items.`
    );

    // Sort based on review score
    if (settings.consider_review_quantity) {
      accommodationsFilteredBySource.sort(
        (
          a: {
            rating: { additional_info: { average_review_score: number } };
          },
          b: {
            rating: {
              additional_info: { average_review_score: number };
            };
          }
        ) => {
          return (
            b.rating.additional_info.average_review_score -
            a.rating.additional_info.average_review_score
          );
        }
      );
    } else {
      accommodationsFilteredBySource.sort(
        (a: { rating: { review_score: number } }, b: { rating: { review_score: number } }) => {
          return b.rating.review_score - a.rating.review_score;
        }
      );
    }

    currentStatusText = `Found ${accommodationsFilteredBySource.length} ${accommodation_type} in ${
      currentDestination['label' as keyof typeof currentDestination]
    }. With a minimum review of ${settings.review} and a price range of ${minPrice}-${maxPrice}.`;
    if (accommodation_type === 'hotels')
      setHotelStatus({ loading: false, message: currentStatusText });
    else setFlatStatus({ loading: false, message: currentStatusText });

    // return accommodationsFilteredBySource; // ***DEV PURPOSES: RETURN ALL HOTELS
    // // Get the top 10 accommodations
    const limitedAccommodations = showTopTen
      ? accommodationsFilteredBySource.slice(0, 10)
      : accommodationsFilteredBySource;
    return limitedAccommodations;
  };

  const addRatingInfo = (accommodations: any[]) => {
    let highestReviewQuantity = accommodations
      .map((x) => x.rating.number_of_reviews)
      .reduce((a, b) => Math.max(a, b));
    let allAccommodationsWithReviewQuantity = accommodations.map((x) => {
      const currentReviewQuantity = x.rating.number_of_reviews;
      const percentage = (currentReviewQuantity / highestReviewQuantity) * 10;

      const additionalRatingInfo = {
        most_reviews: highestReviewQuantity,
        review_percentage: percentage,
        average_review_score: (x.rating.review_score + percentage) / 2,
      };

      let newRating = { ...x };

      newRating.rating.additional_info = additionalRatingInfo;
      return newRating;
    });
    return allAccommodationsWithReviewQuantity;
  };

  const addMultiplePrices = (
    accommodations: any[],
    accommodationPrices: {
      data: object[];
      checkin: string;
      checkout: string;
    } | null
  ) => {
    if (accommodationPrices === null || accommodationPrices === undefined) {
      // if accommodationPrices is null then just adjust the price to an array with the current price having a date of today
      let currentDate: string = moment().format('YYYY-MM-DD');
      let tomorrowDate: string = moment().add(1, 'days').format('YYYY-MM-DD');
      return accommodations.map((x) => {
        return {
          ...x,
          price: [{ ...x.price, checkin: currentDate, checkout: tomorrowDate }],
        };
      });
    } else {
      // if accommodationPrices exists, loop through each one and match with accommodations then just add the new price to the array
      const updatedAccommodations = accommodations.map((x) => {
        const currentPrice = accommodationPrices.data.filter((price: object) => {
          return price['id' as keyof typeof price] === x.id;
        });
        if (currentPrice.length === 1) {
          return {
            ...x,
            price: [
              ...x.price,
              {
                ...currentPrice[0],
                checkin: accommodationPrices.checkin,
                checkout: accommodationPrices.checkout,
              },
            ],
          };
        } else {
          return {
            ...x,
            price: [
              ...x.price,
              {
                price: {},
                checkin: accommodationPrices.checkin,
                checkout: accommodationPrices.checkout,
              },
            ],
          };
        }
      });
      return updatedAccommodations;
    }
  };

  const convertGoogleHotels = (googleHotels: any[], neighborhood: string) => {
    // convert google hotels to the same format as booking.com hotels
    return googleHotels.map((x) => {
      return {
        ...x,
        accommodation_type: 0,
        location: {
          address: x.formattedAddress,
          districts: [neighborhood],
        },
        rating: {
          stars: x.rating,
          review_score: x.rating * 2,
          number_of_reviews: x.user_ratings_total,
          additional_info: {
            most_reviews: null,
            review_percentage: null,
            average_review_score: x.rating * 2,
          },
        },
        price: [
          {
            price: {},
            checkin: null,
            checkout: null,
          },
        ],
        facilities: [],
      };
    });
  };

  const resetVariablesAndStatus = () => {
    setSuggestions([]);
    setGoogleFetchingAccommodations(false);
    setAllCommonAccommodations([]);
    setAllGoogleAccommodations([]);
    setAllFetchedAccommodations([]);
    setCurrentAllHotels([]);
    setCurrentDistricts([]);
    setSelectedDistricts([]);
    setCurrentAllFlats([]);
    setSelectedStars([0, 1, 2, 3, 4, 5]);
    setSelectedSources([0, 1, 2]);
    setNeighborhoodInput('');
    setStatus({ loading: false, message: '' });
    setHotelStatus({ loading: false, message: '' });
    setFlatStatus({ loading: false, message: '' });
  };

  useEffect(() => {
    setSettings({ ...settings, tier: currentTier });
    // reload results based on the new tier
  }, [currentTier]);

  useEffect(() => {
    if (showSettings) setShowSettings(false);
    fetchAccommodations();
  }, [currentDestination, settings]);

  useEffect(() => {
    const curCheckin = currentDates['checkin' as keyof typeof currentDates];
    const curCheckout = currentDates['checkout' as keyof typeof currentDates];
    if (curCheckin === 'null' && curCheckout === 'null') {
      setDisplayedDates(
        `${moment().format('MM/DD/YYYY')} to ${moment().add(1, 'day').format('MM/DD/YYYY')}`
      );
    } else {
      setDisplayedDates(
        `${moment(curCheckin, 'YYYY-MM-DD').format('MM/DD/YYYY')} to ${moment(
          curCheckout,
          'YYYY-MM-DD'
        ).format('MM/DD/YYYY')}`
      );
    }
  }, [currentDates]);

  useEffect(() => {
    if (allFetchedAccommodations.length === 0) return;

    // remove common accommodations in allGoogleAccommodations
    const allGoogleAccommodationsFiltered = allGoogleAccommodations.filter(
      (x) =>
        !allCommonAccommodations.map((x) => x.name['en-gb' as keyof typeof x.name]).includes(x.name)
    );

    const combineGoogleAndBookingHotels = [
      ...allFetchedAccommodations,
      ...allGoogleAccommodationsFiltered,
    ];

    const preparedHotels = prepareResults(combineGoogleAndBookingHotels, 'hotels') || [];
    setCurrentAllHotels(preparedHotels);

    if (showFlats) {
      const prepareFlats = prepareResults(combineGoogleAndBookingHotels, 'flats') || [];
      setCurrentAllFlats(prepareFlats);
    }
  }, [
    selectedDistricts,
    selectedStars,
    selectedSources,
    showTopTen,
    showFlats,
    allGoogleAccommodations,
    allCommonAccommodations,
  ]);

  return (
    <main>
      <small className="float-end">v1.0.3</small>
      <div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
        <div>
          <div className="grid grid-cols-4 gap-1">
            <div className="col-span-2">
              <p className="font-bold text-md">Search</p>
              <input
                type="text"
                value={destination}
                className="border border-black rounded-md w-full p-[5.5px]"
                onChange={(event) => {
                  setDestination(event.target.value);
                  if (event.target.value.length > 3) fetchSuggestions(event.target.value);
                  else setSuggestions([]);
                }}
              />
            </div>
            <div>
              <p className="font-bold text-md">Dates</p>
              <input
                style={{ cursor: 'default', caretColor: 'transparent' }}
                value={displayedDates || ''}
                readOnly={true}
                type="text"
                className="border border-black rounded-md w-full p-[5.5px]"
                onClick={() => setOpenDatePicker(!openDatePicker)}
              />
            </div>
            <div>
              <p className="font-bold text-md">Price Tier</p>
              <select
                disabled={ignorePriceAndRating}
                className="border border-black rounded-md w-full p-2"
                name="tier"
                id="tier"
                onChange={(e) => {
                  setCurrentTier(e.target.value);
                }}
              >
                <option value={'budget'}>Budget</option>
                <option value={'midrange'}>Mid Range</option>
                <option value={'luxury'}>Luxury</option>
              </select>
            </div>
          </div>

          {openDatePicker && (
            <DateDialog
              dateDialogValues={{
                duration: dateDialogValues['duration' as keyof typeof dateDialogValues],
                monthYear: dateDialogValues['monthYear' as keyof typeof dateDialogValues],
              }}
              setDialogValues={setDateDialogValues}
              setCurrentDates={setCurrentDates}
              closeDialog={setOpenDatePicker}
            />
          )}

          {suggestions.length > 0 && (
            <div className="flex flex-col w-full gap-3 bg-white">
              <div className="grid grid-cols-4 gap-1">
                <div className="col-span-4 border border-black rounded-md shadow-lg p-1">
                  {suggestions.map((suggestion) => {
                    const label = suggestion['label' as keyof typeof suggestion];
                    const dest_id = suggestion['dest_id' as keyof typeof suggestion];
                    const dest_type = suggestion['dest_type' as keyof typeof suggestion];
                    return (
                      <SuggestedItem
                        key={dest_id}
                        label={label}
                        type={dest_type}
                        id={dest_id}
                        suggestionClick={setCurrentDestination}
                        setDestination={setDestination}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {currentDistricts.length > 0 && (
            <div className="border border-black rounded-md w-full p-2 mt-2">
              <p className="font-bold text-sm">
                Filter Booking.com results by District/Neighborhood
              </p>
              <Districts
                currentDistricts={currentDistricts}
                selectedDistricts={selectedDistricts}
                setSelectedDistricts={setSelectedDistricts}
              />
              <div className="mt-4">
                <p className="font-bold text-sm">
                  Search Additional Hotels with Google Maps by District/Neighborhood
                </p>
                <div className="flex flex-row gap-1 w-full justify-center">
                  <input
                    type="text"
                    placeholder="Enter a nieghborhood/district"
                    value={neighborhoodInput}
                    className="w-4/5 border border-black rounded-md p-[5.5px]"
                    onChange={(event) => setNeighborhoodInput(event.target.value)}
                  />
                  <button
                    disabled={googleFetchingAccommodations}
                    className={`w-1/5 border border-black rounded-md p-2 hover:bg-gray-200 ${
                      googleFetchingAccommodations && 'bg-gray-200'
                    } flex items-center justify-center`}
                    onClick={() => fetchGoogleAccommodations(neighborhoodInput)}
                  >
                    {googleFetchingAccommodations ? <Spinner /> : 'Search Google Maps'}
                  </button>
                </div>
                {googleSearchLog !== '' && (
                  <textarea
                    id="googleSearchLog"
                    disabled
                    className="border border-black rounded-md h-32 w-full p-2 mt-2 text-xs"
                    value={googleSearchLog}
                  />
                )}
              </div>
            </div>
          )}

          {allFetchedAccommodations.length > 0 && (
            <div className="border border-black rounded-md w-full p-2 mt-2 flex gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-sm">Filter by Stars</p>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(1)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedStars([...selectedStars, 1]);
                      } else {
                        setSelectedStars(selectedStars.filter((x) => x !== 1));
                      }
                    }}
                  />
                  <p className="text-sm ml-1">1 Star</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(2)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedStars([...selectedStars, 2]);
                      } else {
                        setSelectedStars(selectedStars.filter((x) => x !== 2));
                      }
                    }}
                  />
                  <p className="text-sm ml-1">2 Stars</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(3)}
                    onChange={(e) => {
                      if (e.target.checked) setSelectedStars([...selectedStars, 3]);
                      else setSelectedStars(selectedStars.filter((x) => x !== 3));
                    }}
                  />
                  <p className="text-sm ml-1">3 Stars</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(4)}
                    onChange={(e) => {
                      if (e.target.checked) setSelectedStars([...selectedStars, 4]);
                      else setSelectedStars(selectedStars.filter((x) => x !== 4));
                    }}
                  />
                  <p className="text-sm ml-1">4 Stars</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(5)}
                    onChange={(e) => {
                      if (e.target.checked) setSelectedStars([...selectedStars, 5]);
                      else setSelectedStars(selectedStars.filter((x) => x !== 5));
                    }}
                  />
                  <p className="text-sm ml-1">5 Stars</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={selectedStars.includes(0)}
                    onChange={(e) => {
                      if (e.target.checked) setSelectedStars([...selectedStars, 0]);
                      else setSelectedStars(selectedStars.filter((x) => x !== 0));
                    }}
                  />
                  <p className="text-sm ml-1">Unrated</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-sm">Filter by Source</p>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={selectedSources.includes(0)}
                    onChange={(e) => {
                      if (e.target.checked) setSelectedSources([...selectedSources, 0]);
                      else setSelectedSources(selectedSources.filter((x) => x !== 0));
                    }}
                  />
                  <p className="text-sm ml-1">Booking.com</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={selectedSources.includes(1)}
                    onChange={(e) => {
                      if (e.target.checked) setSelectedSources([...selectedSources, 1]);
                      else setSelectedSources(selectedSources.filter((x) => x !== 1));
                    }}
                  />
                  <p className="text-sm ml-1">Google Maps</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={selectedSources.includes(2)}
                    onChange={(e) => {
                      if (e.target.checked) setSelectedSources([...selectedSources, 2]);
                      else setSelectedSources(selectedSources.filter((x) => x !== 2));
                    }}
                  />
                  <p className="text-sm ml-1">Common Hotels</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-row">
            <div>{status['loading' as keyof typeof status] ? <Spinner /> : ''}</div>
            <p className="text-sm">{status['message' as keyof typeof status]}</p>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-1 text-xs text-blue-800 font-semibold underline hover:text-blue-950 hover:font-extrabold"
          >
            {!showSettings ? '+ open' : '- close'} settings
          </button>
          {showSettings && (
            <Settings
              settings={settings}
              showFlats={showFlats}
              showTopTen={showTopTen}
              ignorePriceAndRating={ignorePriceAndRating}
              setIgnorePriceAndRating={setIgnorePriceAndRating}
              saveSettings={setSettings}
              setShowFlats={setShowFlats}
              setShowTopTen={setshowTopTen}
            />
          )}
        </div>

        <div>
          {currentAllHotels.length > 0 && (
            <p className="font-bold text-xl">{`${showTopTen ? 'Top 10' : 'All'} Hotels:`}</p>
          )}
          <div className="flex flex-row">
            <div>{hotelStatus['loading' as keyof typeof hotelStatus] ? <Spinner /> : ''}</div>
            <p className="text-sm">{hotelStatus['message' as keyof typeof hotelStatus]}</p>
          </div>
          {currentAllHotels.length > 0 && (
            <div className="border border-black rounded-md h-auto p-2 flex flex-col">
              {currentAllHotels.length > 0
                ? currentAllHotels.map((x, i) => {
                    const commonHotel = allCommonAccommodations.find(
                      (item: { id: any }) => item.id === x.id
                    );

                    return (
                      <ResultItem
                        key={`result_${i}`}
                        index={i}
                        result={commonHotel ? commonHotel : x}
                        districts={currentDistricts}
                        commonData={commonHotel}
                      />
                    );
                  })
                : null}
            </div>
          )}
        </div>

        {showFlats && (
          <div>
            {currentAllFlats.length > 0 && (
              <p className="font-bold text-xl">{`${showTopTen ? 'Top 10' : 'All'} Flats:`}</p>
            )}
            <div className="flex flex-row">
              <div>{flatStatus['loading' as keyof typeof flatStatus] ? <Spinner /> : ''}</div>
              <p className="text-sm">{flatStatus['message' as keyof typeof flatStatus]}</p>
            </div>
            {currentAllFlats.length > 0 && (
              <div className="border border-black rounded-md h-auto p-2 flex flex-col">
                {currentAllFlats.length > 0
                  ? currentAllFlats.map((x, i) => (
                      <ResultItem
                        key={`result_${i}`}
                        index={i}
                        result={x}
                        districts={currentDistricts}
                        commonData={null}
                      />
                    ))
                  : null}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-row-reverse">
          <button
            className="w-full border border-black rounded-md p-1 bg-red-400 hover:bg-red-500 font-bold"
            onClick={() => {
              setCurrentDestination({ type: 'null', id: 'null', label: 'null' });
              setDestination('');
              resetVariablesAndStatus();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
