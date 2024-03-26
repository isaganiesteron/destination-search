"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import ResultItem from "@/components/ResultItem";
import { Settings as I_Settings } from "@/constants/interfaces";
import Settings from "@/components/Settings";
import Spinner from "@/components/Spinner";
import SuggestedItem from "@/components/SuggestedItem";
import { apartmentTypes, hotelTypes } from "@/constants/accommodationtypes";
import moment from "moment";
import DateDialog from "@/components/DateDialog";
import Districts from "@/components/Districts";

const Page = () => {
  const [status, setStatus] = useState<object>({
    loading: false,
    message: "Search for a destination.",
  });
  const [hotelStatus, setHotelStatus] = useState<object>({
    loading: false,
    message: "",
  });
  const [flatStatus, setFlatStatus] = useState<object>({
    loading: false,
    message: "",
  });

  const [allFetchedAccommodations, setAllFetchedAccommodations] = useState<
    any[]
  >([]);
  const [currentAllHotels, setCurrentAllHotels] = useState<any[]>([]);
  const [currentAllFlats, setCurrentAllFlats] = useState<any[]>([]);
  const [currentDistricts, setCurrentDistricts] = useState<object[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<number[]>([]);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const [destination, setDestination] = useState<string>("");
  const [suggestions, setSuggestions] = useState<object[]>([]);
  const [currentDestination, setCurrentDestination] = useState<object>({
    type: "null",
    id: "null",
    label: "null",
  });
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const [displayedDates, setDisplayedDates] = useState<string>("");
  const [dateDialogValues, setDateDialogValues] = useState<object>({
    duration: "day",
    monthYear: `${moment().format("MMM")}${moment().format("YYYY")}`,
  });
  const [currentDates, setCurrentDates] = useState<object>({
    checkin: "null",
    checkout: "null",
  });

  const [currentTier, setCurrentTier] = useState<string>("budget");
  const [settings, setSettings] = useState<I_Settings>({
    review: 8.3,
    consider_review_quantity: true,
    tier: "budget",
    hoteltypes: hotelTypes,
    facilities: [], // check none by default
    apartmenttypes: ["201"],
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

  // ***This isn't working well, it's not getting the data in realtime. TODO
  // const [inputValue, setInputValue] = useState("")
  // const [typingTimeout, setTypingTimeout] = useState<any>(0)

  const fetchSuggestions = async (query: string) => {
    const response = await fetch("/api/autosuggest/" + query);
    if (response.status === 200) {
      const data = await response.json();
      setSuggestions(
        data.filter(
          (x: any) =>
            x.dest_type !== "district" &&
            x.dest_type !== "hotel" &&
            x.dest_type !== "airport"
        )
      );
    }
  };
  const fetchDistricts = async () => {
    const destinationType =
      currentDestination["type" as keyof typeof currentDestination];
    const destinationId =
      currentDestination["id" as keyof typeof currentDestination];

    const fetchString = `/api/district/${destinationType}/${destinationId}`;
    const response = await fetch(fetchString);
    const responseJson = await response.json();
    setCurrentDistricts(responseJson);

    // // use mock data
    // setCurrentDistricts(require("@/mock_data/districts").default);
  };

  const fetchAccommodations = async () => {
    const tierSettings = settings[settings.tier as keyof typeof settings];
    const minPrice = tierSettings["min_price" as keyof typeof tierSettings];
    const maxPrice = tierSettings["max_price" as keyof typeof tierSettings];
    const review = settings.review;
    const destinationType =
      currentDestination["type" as keyof typeof currentDestination];
    const destinationId =
      currentDestination["id" as keyof typeof currentDestination];
    const destinationLabel =
      currentDestination["label" as keyof typeof currentDestination];

    ``;
    const dateCheckin = currentDates["checkin" as keyof typeof currentDates];
    const dateCheckout = currentDates["checkout" as keyof typeof currentDates];

    const checkin =
      dateCheckin === "null"
        ? moment().format("YYYY-MM-DD")
        : moment(dateCheckin).format("YYYY-MM-DD");
    const checkout =
      dateCheckout === "null"
        ? moment().add(1, "days").format("YYYY-MM-DD")
        : moment(dateCheckout).format("YYYY-MM-DD");

    if (destinationType === "null" || destinationId === "null") return;

    setSuggestions([]);
    setAllFetchedAccommodations([]);
    setCurrentAllHotels([]);
    setHotelStatus({ loading: false, message: "" });
    setFlatStatus({ loading: false, message: "" });
    setStatus({
      loading: true,
      message: `Fetch all accommodations in ${destinationLabel} (${destinationType}) with a maximum price of ${maxPrice} with a minumum review of ${review}`,
    });

    let allAccommodationsFetched: any[] = [];
    let morePages = true;
    let nextPage = "";

    // fetch all pages
    while (morePages) {
      const currentDestinationType =
        nextPage === "" ? destinationType : nextPage;
      const currentDestinationId = nextPage === "" ? destinationId : "null";
      const currentPriceRange =
        nextPage === "" ? `${minPrice}_${maxPrice}` : "null";

      const response = await fetch(
        `/api/hotels/${currentDestinationType}/${currentDestinationId}/${currentPriceRange}/${review}/${checkin}_${checkout}`
      ); // maxPrice is in USD
      const responseJson = await response.json();

      if (responseJson.data)
        allAccommodationsFetched.push(...responseJson.data);

      if (responseJson.next_page) {
        // console.log("Fetching next page...");
        nextPage = responseJson.next_page;
        setStatus({
          loading: true,
          message: `Fetched ${allAccommodationsFetched.length} hotels so far. Fetching more...`,
        });
        // pause for 1 second before next request
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
        // console.log("All pages fetched.");
        nextPage = "";
        morePages = false;
      }
    }
    // filter results by saved facilities here
    let allAccommodationsFetchedWithFacilities =
      allAccommodationsFetched.filter((accommodation) => {
        const facilitiesAreIncluded = accommodation.facilities.filter(
          (x: any) => {
            return settings.facilities.includes(x.id);
          }
        );
        return facilitiesAreIncluded.length === settings.facilities.length;
      });

    if (allAccommodationsFetchedWithFacilities.length === 0) {
      setStatus({
        loading: false,
        message: `Fetched 0 accommodations in ${destinationLabel} (${destinationType}) with a maximum price of ${maxPrice} with a minumum review of ${review} with facilities selected.`,
      });
      console.log("----Done Fetching Hotels----");
      return;
    }

    //add multiple prices here
    let allAccommodationsFetchedWithMultiplePrice = addMultiplePrices(
      allAccommodationsFetchedWithFacilities,
      null
    );

    // console.log("----Fetching Multiple Prices---");
    const accommodationExtraPrices = [];
    const monthsToFetchPrices = [
      "February",
      "May",
      "July",
      "October",
      "December",
    ];
    let monthCounter = 0;
    while (monthCounter < monthsToFetchPrices.length) {
      // console.log(`Fetching prices for ${monthsToFetchPrices[monthCounter]}`);
      const checkin = moment()
        .month(monthsToFetchPrices[monthCounter])
        .startOf("month");
      const checkout = moment()
        .month(monthsToFetchPrices[monthCounter])
        .startOf("month")
        .add(1, "days");

      // see first if allAccommodationsFetched is less than 100f
      const allIdsParam = allAccommodationsFetched.map((x) => x.id).join(",");
      const response = await fetch(
        `/api/prices/${allIdsParam}/${checkin.format(
          "YYYY-MM-DD"
        )}/${checkout.format("YYYY-MM-DD")}`
      );
      const responseJson = await response.json();
      accommodationExtraPrices.push(responseJson.data);
      // console.log(
      //   `Found ${responseJson?.data.length} for ${monthsToFetchPrices[monthCounter]}`
      // );
      monthCounter++;
    }

    accommodationExtraPrices.forEach((month) => {
      allAccommodationsFetchedWithMultiplePrice = addMultiplePrices(
        allAccommodationsFetchedWithMultiplePrice,
        month
      );
    });

    fetchDistricts();

    // // mock data
    // const allAccommodationsFetchedWithMultiplePrice =
    //   require("@/mock_data/accommodations").default;

    // console.log(JSON.stringify(allAccommodationsFetchedWithMultiplePrice));

    // this is used to update the results based on district
    setAllFetchedAccommodations(allAccommodationsFetchedWithMultiplePrice);

    // get all districts from all fetched accommodations here

    // initially set the selected districtss
    let tempSelectedDistricts: number[] = [...selectedDistricts];
    allAccommodationsFetchedWithMultiplePrice.forEach(
      (x: { location: { districts: any } }) => {
        const currentDiscrict = x.location.districts;
        if (currentDiscrict.length > 0) {
          currentDiscrict.forEach((district: number) => {
            if (tempSelectedDistricts.includes(district) === false)
              tempSelectedDistricts.push(district);
          });
        }
      }
    );
    setSelectedDistricts(tempSelectedDistricts);

    setStatus({
      loading: false,
      message: `Fetched ${allAccommodationsFetchedWithMultiplePrice.length} accommodations in ${destinationLabel} (${destinationType}) with a maximum price of ${maxPrice} with a minumum review of ${review}`,
    });
    console.log("----Done Fetching Hotels----");

    const preparedHotels = prepareResults(
      allAccommodationsFetchedWithMultiplePrice,
      "hotels"
    );
    const prepareFlats = prepareResults(
      allAccommodationsFetchedWithMultiplePrice,
      "flats"
    );

    setCurrentAllHotels(preparedHotels || []);
    setCurrentAllFlats(prepareFlats || []);
  };

  const prepareResults = (
    allAccommodations: any[] | null,
    accommodation_type: string
  ) => {
    if (allAccommodations === null) return;
    let currentStatusText = "";

    // Categorize the accommodations based on the type
    const accommodationsIncluded =
      accommodation_type == "hotels"
        ? settings.hoteltypes
        : settings.apartmenttypes;
    const specificAccommodations = allAccommodations.filter((x) =>
      accommodationsIncluded.includes(String(x.accommodation_type))
    );

    // Set the status
    const tierSettings = settings[settings.tier as keyof typeof settings];
    const minPrice = tierSettings["min_price" as keyof typeof tierSettings];
    const maxPrice = tierSettings["max_price" as keyof typeof tierSettings];
    if (specificAccommodations.length === 0) {
      currentStatusText = `No ${accommodation_type} found in ${
        currentDestination["label" as keyof typeof currentDestination]
      }. With a minimum review of ${
        settings.review
      } and a price range of ${minPrice}-${maxPrice}.`;

      if (accommodation_type === "hotels")
        setHotelStatus({ loading: false, message: currentStatusText });
      else setFlatStatus({ loading: false, message: currentStatusText });
      return [];
    }

    // Add rating info (just extra data in the the rating object)
    const accommodationsWithRating = addRatingInfo(specificAccommodations);

    // Filter by selected districts HERE
    const accommodationsFilteredByDistrict = accommodationsWithRating.filter(
      (x: { location: { districts: number[] } }) => {
        if (selectedDistricts.length === 0) return true;
        return x.location.districts.some((district) =>
          selectedDistricts.includes(district)
        );
      }
    );

    // Filter hotels by review (This might not be necessary because we are already filtering by review in the API call)
    // TODO: try and not include this part
    const accommodationsFilteredByReview =
      accommodationsFilteredByDistrict.filter(
        (x: { rating: { review_score: number } }) =>
          x.rating?.review_score >= settings.review
      );

    // Sort based on review score
    if (settings.consider_review_quantity) {
      accommodationsFilteredByReview.sort(
        (
          a: { rating: { additional_info: { average_review_score: number } } },
          b: { rating: { additional_info: { average_review_score: number } } }
        ) => {
          return (
            b.rating.additional_info.average_review_score -
            a.rating.additional_info.average_review_score
          );
        }
      );
    } else {
      accommodationsFilteredByReview.sort(
        (
          a: { rating: { review_score: number } },
          b: { rating: { review_score: number } }
        ) => {
          return b.rating.review_score - a.rating.review_score;
        }
      );
    }

    currentStatusText = `Found ${
      accommodationsFilteredByReview.length
    } ${accommodation_type} in ${
      currentDestination["label" as keyof typeof currentDestination]
    }. With a minimum review of ${
      settings.review
    } and a price range of ${minPrice}-${maxPrice}.`;
    if (accommodation_type === "hotels")
      setHotelStatus({ loading: false, message: currentStatusText });
    else setFlatStatus({ loading: false, message: currentStatusText });

    // Get the top 10 accommodations
    const topTenAccommodations = accommodationsFilteredByReview.slice(0, 10);

    return topTenAccommodations;
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
    if (accommodationPrices === null) {
      // if accommodationPrices is null then just adjust the price to an array with the current price having a date of today
      let currentDate: string = moment().format("YYYY-MM-DD");
      let tomorrowDate: string = moment().add(1, "days").format("YYYY-MM-DD");
      return accommodations.map((x) => {
        return {
          ...x,
          price: [{ ...x.price, checkin: currentDate, checkout: tomorrowDate }],
        };
      });
    } else {
      // if accommodationPrices exists, loop through each one and match with accommodations then just add the new price to the array
      const updatedAccommodations = accommodations.map((x) => {
        const currentPrice = accommodationPrices.data.filter(
          (price: object) => {
            return price["id" as keyof typeof price] === x.id;
          }
        );
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

  const handleReset = () => {
    setCurrentDestination({ type: "null", id: "null", label: "null" });
    setDestination("");
    setSuggestions([]);
    setCurrentAllHotels([]);
    setCurrentAllFlats([]);
    setStatus({ loading: false, message: "Search for a destination." });
    setHotelStatus({ loading: false, message: "" });
    setFlatStatus({ loading: false, message: "" });
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
    const curCheckin = currentDates["checkin" as keyof typeof currentDates];
    const curCheckout = currentDates["checkout" as keyof typeof currentDates];
    if (curCheckin === "null" && curCheckout === "null") {
      setDisplayedDates(
        `${moment().format("MM/DD/YYYY")} to ${moment()
          .add(1, "day")
          .format("MM/DD/YYYY")}`
      );
    } else {
      setDisplayedDates(
        `${moment(curCheckin).format("MM/DD/YYYY")} to ${moment(
          curCheckout
        ).format("MM/DD/YYYY")}`
      );
    }
  }, [currentDates]);

  useEffect(() => {
    const preparedHotels = prepareResults(allFetchedAccommodations, "hotels");
    const prepareFlats = prepareResults(allFetchedAccommodations, "flats");
    setCurrentAllHotels(preparedHotels || []);
    setCurrentAllFlats(prepareFlats || []);
  }, [selectedDistricts]);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setDestination(event.target.value);
    if (event.target.value.length > 3) fetchSuggestions(event.target.value);
    else setSuggestions([]);
  };

  return (
    <main>
      <div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
        <div>
          <div className="grid grid-cols-4 gap-1">
            <div className="col-span-2">
              <p className="font-bold text-md">Search</p>
              <input
                type="text"
                value={destination}
                className="border border-black rounded-md w-full p-[5.5px]"
                onChange={searchHandler}
              />
            </div>
            <div>
              <p className="font-bold text-md">Dates</p>
              <input
                style={{ cursor: "default", caretColor: "transparent" }}
                value={displayedDates || ""}
                readOnly={true}
                type="text"
                className="border border-black rounded-md w-full p-[5.5px]"
                onClick={() => setOpenDatePicker(!openDatePicker)}
              />
            </div>
            <div>
              <p className="font-bold text-md">Price Tier</p>
              <select
                className="border border-black rounded-md w-full p-2"
                name="tier"
                id="tier"
                onChange={(e) => {
                  setCurrentTier(e.target.value);
                }}
              >
                <option value={"budget"}>Budget</option>
                <option value={"midrange"}>Mid Range</option>
                <option value={"luxury"}>Luxury</option>
              </select>
            </div>
          </div>

          {openDatePicker && (
            <DateDialog
              dateDialogValues={{
                duration:
                  dateDialogValues["duration" as keyof typeof dateDialogValues],
                monthYear:
                  dateDialogValues[
                    "monthYear" as keyof typeof dateDialogValues
                  ],
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
                    const label =
                      suggestion["label" as keyof typeof suggestion];
                    const dest_id =
                      suggestion["dest_id" as keyof typeof suggestion];
                    const dest_type =
                      suggestion["dest_type" as keyof typeof suggestion];
                    return (
                      <SuggestedItem
                        key={dest_id}
                        label={label}
                        type={dest_type}
                        id={dest_id}
                        suggestionClick={setCurrentDestination}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {currentDistricts.length > 0 && (
            <div className="border border-black rounded-md w-full p-2">
              <p className="font-bold text-sm">Disctricts</p>
              <Districts
                currentDistricts={currentDistricts}
                selectedDistricts={selectedDistricts}
                setSelectedDistricts={setSelectedDistricts}
              />
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-row">
            <div>
              {status["loading" as keyof typeof status] ? <Spinner /> : ""}
            </div>
            <p className="text-sm">
              {status["message" as keyof typeof status]}
            </p>
          </div>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-1 text-xs text-blue-800 font-semibold underline hover:text-blue-950 hover:font-extrabold"
          >
            {!showSettings ? "+ open" : "- close"} settings
          </button>
          {showSettings && (
            <Settings settings={settings} saveSettings={setSettings} />
          )}
        </div>

        <div>
          {currentAllHotels.length > 0 && (
            <p className="font-bold text-xl">Top 10 Hotels:</p>
          )}
          <div className="flex flex-row">
            <div>
              {hotelStatus["loading" as keyof typeof hotelStatus] ? (
                <Spinner />
              ) : (
                ""
              )}
            </div>
            <p className="text-sm">
              {hotelStatus["message" as keyof typeof hotelStatus]}
            </p>
          </div>
          {currentAllHotels.length > 0 && (
            <div className="border border-black rounded-md h-auto p-2 flex flex-col">
              {currentAllHotels.length > 0
                ? currentAllHotels.map((x, i) => (
                    <ResultItem
                      key={`result_${i}`}
                      index={i}
                      result={x}
                      districts={currentDistricts}
                    />
                  ))
                : null}
            </div>
          )}
        </div>

        <div>
          {currentAllFlats.length > 0 && (
            <p className="font-bold text-xl">Top 10 Flats:</p>
          )}
          <div className="flex flex-row">
            <div>
              {flatStatus["loading" as keyof typeof flatStatus] ? (
                <Spinner />
              ) : (
                ""
              )}
            </div>
            <p className="text-sm">
              {flatStatus["message" as keyof typeof flatStatus]}
            </p>
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
                    />
                  ))
                : null}
            </div>
          )}
        </div>

        <div className="flex flex-row-reverse">
          <button
            className="w-full border border-black rounded-md p-1 bg-red-400 hover:bg-red-500 font-bold"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;
