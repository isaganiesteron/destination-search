import React, { useState } from 'react';
import Image from 'next/image';
import Spinner from '@/components/Spinner';
import { accommodationTypes, accommodationFacilities } from '@/constants/accommodationtypes';
import moment from 'moment';

const ResultItem = ({
  index,
  result,
  districts,
  commonData,
}: {
  index: number;
  result: any;
  districts: object[];
  commonData: any;
}) => {
  const isGoogle = result.place_id ? true : false;
  const googleName = result.google_data ? result.google_data.name : '';
  const googleRating = result.google_data ? result.google_data.rating : 0;
  const googleRatingNumber = result.google_data ? result.google_data.user_ratings_total : 0;

  const isCommon = commonData ? true : false;
  const name = result.name
    ? isGoogle
      ? result.name
      : result.name['en-gb' as keyof typeof result.name]
    : 'NA';

  const currDescription = result.description
    ? result.description.text['en-gb' as keyof typeof result.description.text]
    : 'Not Available';
  const currPhoto = result.place_id
    ? result.icon
    : result.photos
    ? result.photos.length > 0
      ? result.photos[0]
        ? result.photos[0].url.thumbnail
        : 'NA'
      : 'NA'
    : 'NA';
  const additionRatingInfo = result.rating.additional_info;
  const stars = result.rating.stars;
  const rating = result.rating
    ? {
        score: result.rating.review_score,
        reviews: result.rating.number_of_reviews,
        average: additionRatingInfo?.average_review_score || 0,
      }
    : { score: 0, reviews: 0, average: 0 };
  const price = result.price
    ? result.price?.price
      ? {
          total: result.price.price.total,
          book: result.price.price.book,
          currency: result.price.currency,
        }
      : null
    : null;
  const accommodationType = isGoogle
    ? result.length > 0
      ? result.types[0]
      : 'Google Result'
    : accommodationTypes.filter((x) => x.id === result.accommodation_type).map((x) => x.name)[0];

  const [showFullDesc, setshowFullDesc] = useState<boolean>(false);
  const [showAllFacilities, setShowAllFacilities] = useState<boolean>(false);
  const facilities = result.facilities
    ? result.facilities.map((x: { id: number }) => {
        const singleItem = accommodationFacilities
          .filter((y: any) => y.id === x.id)
          .map((x: any) => x.name);
        return singleItem[0];
      })
    : [];

  const [currentDescription, setCurrentDescription] = useState<string>(currDescription);
  const [descLoading, setDescLoading] = useState<boolean>(false);

  let total: number | undefined,
    book: string | undefined,
    currency: string | undefined = undefined;

  if (price !== null && price !== undefined) {
    total = price['total' as keyof typeof price];
    book = price['book' as keyof typeof price];
    currency = price['currency' as keyof typeof price];
  }

  const _regenerateHandler = () => {
    setDescLoading(true);
    // fetch genereated description from openAi
    setTimeout(() => {
      setDescLoading(false);
      setCurrentDescription(`[Regenerated with openAI in developement]   ${currentDescription}`);
    }, 1000);
    setCurrentDescription('');
  };

  const DisplayFacilitiesButton = () => {
    return (
      <button
        type="button"
        className="pl-3 text-[12px] text-blue-800 font-semibold underline hover:text-blue-950"
        onClick={() => setShowAllFacilities(!showAllFacilities)}
      >
        {showAllFacilities ? 'hide' : 'show'} all facilities
      </button>
    );
  };

  const DisplayDescButton = () => {
    return (
      <button
        type="button"
        className="pl-3 text-[12px] text-blue-800 font-semibold underline hover:text-blue-950"
        onClick={() => setshowFullDesc(!showFullDesc)}
      >
        {showFullDesc ? 'hide' : 'show'} full description
      </button>
    );
  };

  return (
    <>
      <div
        className={`border${isCommon ? '-4' : ''} ${
          isCommon ? 'border-red-500' : 'border-black'
        } rounded-md flex flex-col w-full mt-2`}
      >
        <div className="grid grid-cols-6 gap-1">
          <div className="p-2 flex items-start align-middle">
            {currPhoto !== 'NA' ? (
              <Image src={currPhoto} width={200} height={200} alt="Image of hotel" />
            ) : (
              <div className="flex border border-black w-[200px] h-[200px] items-center justify-center">
                <small>Image not available</small>
              </div>
            )}
          </div>

          <div className="p-2 col-span-5 items-center">
            <div className="flex flex-col">
              {isCommon && <small>(Found both in Booking.com and Google Maps)</small>}
              <div className="flex flex-row">
                <h1 className="font-bold text-lg">{`${index + 1}: ${name}`}</h1>
                {!isGoogle && (
                  <button
                    type="button"
                    className="pl-2 text-[12px] text-blue-800 font-semibold underline hover:text-blue-950 hover:font-extrabold"
                    onClick={() => window.open(result.url, '_blank')}
                  >
                    {`Link to ${accommodationType}`}
                  </button>
                )}
              </div>
              <div className="flex flex-row justify-between ">
                <div className="w-[70%]">
                  {isCommon && (
                    <>
                      <p className="underline">
                        <span className="font-bold">Google Maps Name:</span> {googleName}
                      </p>
                      <p className="underline">
                        <span className="font-bold">Google Maps Rating:</span> {googleRating}
                      </p>
                      <p className="underline">
                        <span className="font-bold">Google Maps Number of Reviews:</span>{' '}
                        {googleRatingNumber}
                      </p>
                    </>
                  )}
                  <p>
                    <span className="font-bold">Stars:</span> {stars ? stars : 'Unrated'}
                  </p>
                  <p>
                    <span className="font-bold">Rating:</span> {rating.score}
                  </p>
                  {!isGoogle && (
                    <>
                      <p>
                        <span className="font-bold">
                          Adjusted Rating{' '}
                          <span className="text-xs">(considering # of reviews)</span>:
                        </span>
                        {rating.average.toFixed(2)}
                      </p>
                    </>
                  )}
                  <p>
                    <span className="font-bold">Number of Reviews:</span> {rating.reviews}
                  </p>
                </div>
                {!isGoogle && (
                  <div className="w-[30%]">
                    <span className="font-bold">Prices:</span>
                    {result.price &&
                      result.price.map((x: any, i: number) => {
                        const curCheckin = moment(x.checkin);
                        if (!x.price) return null;
                        if (x.price.total)
                          return (
                            <p key={i}>{`${curCheckin.format('MMMM')} ${curCheckin.format(
                              'YYYY'
                            )}: ${x.price.total}${x.currency}`}</p>
                          );
                        else return null;
                      })}
                  </div>
                )}
              </div>
              <p>
                <span className="font-bold">Districts: </span>
                {result.place_id
                  ? result.location.districts[0]
                  : result.location.districts
                      .map((x: number, i: number) => {
                        const districtName: object[] = districts.filter((y: any) => y.id === x);
                        return districtName.length > 0
                          ? districtName[0]['name' as keyof (typeof districtName)[0]]
                          : `(${x} *not found)`;
                      })
                      .join(', ')}
              </p>

              {!isGoogle && (
                <>
                  <p>
                    <span className="font-bold">Facilities:</span>
                  </p>
                  <div className="flex flex-row items-center">
                    {showAllFacilities ? (
                      <>
                        <p>
                          {facilities.join(', ')}
                          {facilities.length > 10 && <DisplayFacilitiesButton />}
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          {facilities.slice(0, 10).join(', ')}
                          {facilities.length > 10 && '...'}
                          {facilities.length > 10 && <DisplayFacilitiesButton />}
                        </p>
                      </>
                    )}
                  </div>
                  <p>
                    <span className="font-bold">Description:</span>
                  </p>
                  {descLoading ? (
                    <div className="flex justify-center items-center min-h-20 align-middle transition-opacity ease-in-out duration-500">
                      <Spinner />
                    </div>
                  ) : (
                    <div className="transition-opacity ease-in-out duration-500">
                      {showFullDesc ? (
                        <p className="text-sm">
                          {currentDescription}
                          {currentDescription.length !==
                            currentDescription.slice(0, 250).length && <DisplayDescButton />}
                        </p>
                      ) : (
                        <p className="text-sm">
                          {currentDescription.slice(0, 250)}
                          {currentDescription.length !== currentDescription.slice(0, 250).length &&
                            '...'}
                          {currentDescription.length !==
                            currentDescription.slice(0, 250).length && <DisplayDescButton />}
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
            {!isGoogle && showFullDesc && (
              <div className="space-x-2 space-y-1 pt-4">
                <button
                  className="border border-black rounded-md p-1 text-xs bg-yellow-300 hover:bg-yellow-400 text-gray-700"
                  onClick={_regenerateHandler}
                >
                  Regenerate Description
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultItem;
