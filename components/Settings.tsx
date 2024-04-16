import React, { useEffect, useState } from 'react';
import { accommodationTypes } from '@/constants/accommodationtypes';

type settingsProps = {
  settings: any;
  showFlats: boolean;
  showTopTen: boolean;
  saveSettings: Function;
  setShowFlats: Function;
  setShowTopTen: Function;
};

const Settings = ({
  settings,
  showFlats,
  showTopTen,
  saveSettings,
  setShowFlats,
  setShowTopTen,
}: settingsProps) => {
  const [curReviewScore, setCurReviewScore] = useState<number>(settings.review);
  const [curConsiderReviewQuantity, setCurConsiderReviewQuantity] = useState<boolean>(
    settings.consider_review_quantity
  );
  const [curhotelTypes, setCurhotelTypes] = useState<object[]>();
  const [curFacilities, setCurFacilities] = useState<number[]>(settings.facilities);
  const [curBudgetMinPrice, setCurBudgetMinPrice] = useState<number>(settings.budget.min_price);
  const [curBudgetMaxPrice, setCurBudgetMaxPrice] = useState<number>(settings.budget.max_price);
  const [curMidrangeMinPrice, setCurMidrangeMinPrice] = useState<number>(
    settings.midrange.min_price
  );
  const [curMidrangeMaxPrice, setCurMidrangeMaxPrice] = useState<number>(
    settings.midrange.max_price
  );
  const [curLuxuryMinPrice, setCurLuxuryMinPrice] = useState<number>(settings.luxury.min_price);
  const [curLuxuryMaxPrice, setCurLuxuryMaxPrice] = useState<number>(settings.luxury.max_price);

  const _facilityHandler = (isChecked: boolean, facilityId: number) => {
    if (isChecked) {
      const tempcurFacilities = [...curFacilities];
      tempcurFacilities.push(facilityId);
      setCurFacilities(tempcurFacilities);
    } else {
      const tempcurFacilities = curFacilities.filter((x) => x !== facilityId);
      setCurFacilities(tempcurFacilities);
    }
  };

  const saveHandler = () => {
    saveSettings({
      ...settings,
      review: curReviewScore,
      consider_review_quantity: curConsiderReviewQuantity,
      hoteltypes: curhotelTypes
        ? curhotelTypes.map((x) => String(x['id' as keyof typeof x]))
        : settings.hoteltypes,
      facilities: curFacilities,
      apartmenttypes: settings.apartmenttypes,
      budget: {
        min_price: curBudgetMinPrice,
        max_price: curBudgetMaxPrice,
        conditions: {},
      },
      midrange: {
        min_price: curMidrangeMinPrice,
        max_price: curMidrangeMaxPrice,
        conditions: {},
      },
      luxury: {
        min_price: curLuxuryMinPrice,
        max_price: curLuxuryMaxPrice,
        conditions: {},
      },
    });
  };

  useEffect(() => {
    const hotelTypesChecked = settings.hoteltypes.map((x: string) => {
      return accommodationTypes.find((type) => type.id === Number(x));
    });
    setCurhotelTypes(hotelTypesChecked);
  }, [settings.hoteltypes]);

  return (
    <div className="m-4 p-2 border border-black rounded-md">
      <p className="font-bold text-md pb-2">Settings:</p>
      <div className="pt-1">
        <p className="font-bold text-sm ">Limit Search Results</p>
        <div className="flex flex-row">
          <input
            type="checkbox"
            checked={showTopTen}
            onChange={(e) => setShowTopTen(e.target.checked)}
          />
          <p className="text-sm ml-2">Show Top 10</p>
        </div>
        <div className="flex flex-row">
          <input
            type="checkbox"
            checked={showFlats}
            onChange={(e) => setShowFlats(e.target.checked)}
          />
          <p className="text-sm ml-2">Show Flats</p>
        </div>
      </div>
      <div className="pt-4">
        <p className="font-bold text-sm ">Minimum Review Score</p>
        <input
          type="number"
          value={curReviewScore}
          className="w-full border border-black rounded-md text-black text-md px-1"
          onChange={(e) => setCurReviewScore(Number(e.target.value))}
        />
        <div className="flex flex-row">
          <input
            type="checkbox"
            checked={curConsiderReviewQuantity}
            onChange={(e) => setCurConsiderReviewQuantity(e.target.checked)}
          />
          <p className="font-bold text-sm ml-2">Consider Review Quantity</p>
        </div>
      </div>
      <div className="pt-4">
        <p className="font-bold text-sm">Min Budget Price</p>
        <input
          type="number"
          value={curBudgetMinPrice}
          className="w-full border border-black rounded-md px-1"
          onChange={(e) => setCurBudgetMinPrice(Number(e.target.value))}
        />
        <p className="font-bold text-sm">Max Budget Price</p>
        <input
          type="number"
          value={curBudgetMaxPrice}
          className="w-full border border-black rounded-md px-1"
          onChange={(e) => setCurBudgetMaxPrice(Number(e.target.value))}
        />
      </div>
      <div className="pt-4">
        <p className="font-bold text-sm">Min Midrange Price</p>
        <input
          type="number"
          value={curMidrangeMinPrice}
          className="w-full border border-black rounded-md px-1"
          onChange={(e) => setCurMidrangeMinPrice(Number(e.target.value))}
        />
        <p className="font-bold text-sm">Max Midrange Price</p>
        <input
          type="number"
          value={curMidrangeMaxPrice}
          className="w-full border border-black rounded-md px-1"
          onChange={(e) => setCurMidrangeMaxPrice(Number(e.target.value))}
        />
      </div>
      <div className="pt-4">
        <p className="font-bold text-sm">Min Luxury Price</p>
        <input
          type="number"
          value={curLuxuryMinPrice}
          className="w-full border border-black rounded-md px-1"
          onChange={(e) => setCurLuxuryMinPrice(Number(e.target.value))}
        />
        <p className="font-bold text-sm">Max Luxury Price</p>
        <input
          type="number"
          value={curLuxuryMaxPrice}
          className="w-full border border-black rounded-md px-1"
          onChange={(e) => setCurLuxuryMaxPrice(Number(e.target.value))}
        />
      </div>

      <div className="pt-4">
        <p className="font-bold text-sm">Hotel Types</p>
        <div className="grid grid-cols-4 gap-1">
          {accommodationTypes.map((type) => {
            const isChecked = curhotelTypes?.find((x) => x['id' as keyof typeof x] === type.id)
              ? true
              : false;
            return (
              <div key={type.id} className="flex flex-row items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      if (curhotelTypes) setCurhotelTypes([...curhotelTypes, type]);
                      else setCurhotelTypes([type]);
                    } else {
                      const newTypes = curhotelTypes?.filter(
                        (x) => x['id' as keyof typeof x] !== type.id
                      );
                      setCurhotelTypes(newTypes);
                    }
                  }}
                />
                <p className="text-sm ml-1">{type.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-4">
        <p className="font-bold text-sm">Airport</p>
        <div className="grid grid-cols-4 gap-1">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              disabled
              onChange={(e) => {
                _facilityHandler(e.target.checked, 0);
              }}
            />
            <p className="text-sm ml-1 line-through">***1km away from an airport</p>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={curFacilities.includes(8)}
              onChange={(e) => {
                _facilityHandler(e.target.checked, 8);
              }}
            />
            <p className="text-sm ml-1">24-hour Front Desk</p>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={curFacilities.includes(17)}
              onChange={(e) => {
                _facilityHandler(e.target.checked, 17);
              }}
            />
            <p className="text-sm ml-1">Airport Shuttle</p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <p className="font-bold text-sm">Family</p>
        <div className="grid grid-cols-4 gap-1">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={curFacilities.includes(28)}
              onChange={(e) => {
                _facilityHandler(e.target.checked, 28);
              }}
            />
            <p className="text-sm ml-1">Family Rooms</p>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={curFacilities.includes(21)}
              onChange={(e) => {
                _facilityHandler(e.target.checked, 21);
              }}
            />
            <p className="text-sm ml-1">Baby Sitting Services</p>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={curFacilities.includes(56)}
              onChange={(e) => {
                _facilityHandler(e.target.checked, 56);
              }}
            />
            <p className="text-sm ml-1">Playgroud/Kids Play Area</p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <p className="font-bold text-sm">Couples</p>

        <div className="grid grid-cols-4 gap-1">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={curFacilities.includes(149)}
              onChange={(e) => {
                _facilityHandler(e.target.checked, 149);
              }}
            />
            <p className="text-sm ml-1">Adults Only</p>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={curFacilities.includes(7)}
              onChange={(e) => {
                _facilityHandler(e.target.checked, 7);
              }}
            />
            <p className="text-sm ml-1">Bar</p>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={curFacilities.includes(15)}
              onChange={(e) => {
                _facilityHandler(e.target.checked, 15);
              }}
            />
            <p className="text-sm ml-1">Terraces</p>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={curFacilities.includes(192)}
              onChange={(e) => {
                _facilityHandler(e.target.checked, 192);
              }}
            />
            <p className="text-sm ml-1">Rooftop Pool</p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <button
          className="w-full border border-black rounded-md p-1 bg-success-300 hover:bg-slate-300 font-bold"
          onClick={saveHandler}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
