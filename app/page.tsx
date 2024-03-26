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

  const [currentAllHotels, setCurrentAllHotels] = useState<any[]>([]);
  const [currentAllFlats, setCurrentAllFlats] = useState<any[]>([]);
  const [currentDistricts, setCurrentDistricts] = useState<any[]>([]);
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
          (x: any) => x.dest_type !== "district" && x.dest_type !== "hotel"
        )
      );
    }
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

    // console.log("allAccommodationsFetchedWithMultiplePrice");
    // console.log(JSON.stringify(allAccommodationsFetchedWithMultiplePrice));

    let allCities: number[] = [];
    allAccommodationsFetchedWithMultiplePrice.forEach(
      (x: { [x: string]: any }) => {
        const location = x["location" as keyof typeof x];
        const cityId = location["city" as keyof typeof location];
        if (!allCities.includes(cityId)) allCities.push(cityId);
      }
    );
    // get districts for all the cities here
    let allDistricts = [];
    let cityCounter = 0;
    while (cityCounter < allCities.length) {
      const response = await fetch(`/api/district/${allCities[cityCounter]}`);
      const responseJson = await response.json();
      allDistricts.push(responseJson);
      cityCounter++;
    }
    setCurrentDistricts(allDistricts);

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
    const accommodationsIncluded =
      accommodation_type == "hotels"
        ? settings.hoteltypes
        : settings.apartmenttypes;
    const specificAccommodations = allAccommodations.filter((x) =>
      accommodationsIncluded.includes(String(x.accommodation_type))
    );
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

    const accommodationsWithRating = addRatingInfo(specificAccommodations);

    // filter hotels by review
    // this should exists since it's already getting results based on reviews
    const accommodationsFilteredByReview = accommodationsWithRating.filter(
      (x: { rating: { review_score: number } }) =>
        x.rating?.review_score >= settings.review
    );
    // sort based on review score
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

    return accommodationsFilteredByReview.slice(0, 10);
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
    console.log("Save Settings");
    console.log(settings);
  }, [settings]);

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

  // ***This isn't working well, it's not getting the data in realtime. TODO
  // useEffect(() => {
  // 	return () => {
  // 		clearTimeout(typingTimeout)
  // 	}
  // }, [typingTimeout])

  const searchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setDestination(event.target.value);
    if (event.target.value.length > 3) fetchSuggestions(event.target.value);
    else setSuggestions([]);

    // ***This isn't working well, it's not getting the data in realtime. TODO
    // if (typingTimeout) clearTimeout(typingTimeout)
    // // will wait half a second before user finishes typing before fetching suggestions
    // setInputValue(event.target.value)
    // setTypingTimeout(
    // 	setTimeout(() => {
    // 		console.log("User has finished typing:", inputValue)
    // 		if (inputValue.length > 3) fetchSuggestions(inputValue)
    // 		else setSuggestions([])
    // 	}, 300)
    // )
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

          {currentDistricts.length > 0 && currentDistricts.join(", ")}
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
                    <ResultItem key={`result_${i}`} index={i} result={x} />
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
                    <ResultItem key={`result_${i}`} index={i} result={x} />
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
