import React, { useEffect, useState } from 'react';
import { accommodationTypes } from '@/constants/accommodationtypes';
import { GoogleUser } from '@/constants/interfaces';

type settingsProps = {
  user: GoogleUser;
  isOpen: boolean;
  setShowSettings: Function;
  fetchSettings: any;
  saveFetchSettings: Function;
  settings: any;
  saveSettings: Function;
};

const Settings = ({
  user,
  isOpen,
  setShowSettings,
  fetchSettings,
  saveFetchSettings,
  settings,
  saveSettings,
}: settingsProps) => {
  // fetchSettings
  const [curIgnoreReviewAndPrice, setCurIgnoreReviewAndPrice] = useState<boolean>(
    fetchSettings.ignoreReviewAndTier
  );
  const [curReviewScore, setCurReviewScore] = useState<number>(fetchSettings.review);
  const [curBudgetMinPrice, setCurBudgetMinPrice] = useState<number>(
    fetchSettings.budget.min_price
  );
  const [curBudgetMaxPrice, setCurBudgetMaxPrice] = useState<number>(
    fetchSettings.budget.max_price
  );
  const [curMidrangeMinPrice, setCurMidrangeMinPrice] = useState<number>(
    fetchSettings.midrange.min_price
  );
  const [curMidrangeMaxPrice, setCurMidrangeMaxPrice] = useState<number>(
    fetchSettings.midrange.max_price
  );
  const [curLuxuryMinPrice, setCurLuxuryMinPrice] = useState<number>(
    fetchSettings.luxury.min_price
  );
  const [curLuxuryMaxPrice, setCurLuxuryMaxPrice] = useState<number>(
    fetchSettings.luxury.max_price
  );

  const [curHotelTypes, setCurHotelTypes] = useState<object[]>();
  const [curApartmentTypes, setCurApartmentTypes] = useState<object[]>([]);
  const [curFacilities, setCurFacilities] = useState<number[]>(settings.facilities);

  const [showSaveDialog, setshowSaveDialog] = useState<boolean>(false);
  const [curPresetName, setCurPresetName] = useState<string>('');
  const [presetStatus, setPresetStatus] = useState<string>('');

  const facilityHandler = (isChecked: boolean, facilityId: number) => {
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
    saveFetchSettings({
      ...fetchSettings,
      ignoreReviewAndTier: curIgnoreReviewAndPrice,
      review: curReviewScore,
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

  const savePresetHandler = async () => {
    // this should be a post

    const fetchSettingPreset = {
      ignoreReviewAndTier: curIgnoreReviewAndPrice,
      review: curReviewScore,
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
    };

    const settingPreset = {
      useReviewQuantity: settings.useReviewQuantity,
      hoteltypes: curHotelTypes?.map((x) => String(x['id' as keyof typeof x])),
      apartmentTypes: curApartmentTypes?.map((x) => String(x['id' as keyof typeof x])),
      facilities: curFacilities,
      fetchMultiplePrices: settings.fetchMultiplePrices,
      showFlats: settings.showFlats,
      showTopTen: settings.showTopTen,
      googleSearchRadius: settings.googleSearchRadius,
    };

    const result = await fetch('/api/new-preset', {
      method: 'POST',
      body: JSON.stringify({
        name: curPresetName,
        user: user.email,
        fetchSettingPreset,
        settingPreset,
      }),
    });

    const reponse = await result.json();
    if (result.status === 200) {
      if (reponse.rowCount === 1) setPresetStatus('Preset Saved Successfully.');
      else setPresetStatus(`ERROR: ${reponse}`);
    } else {
      setPresetStatus(`ERROR: ${reponse}`);
    }
  };

  useEffect(() => {
    if (settings.hoteltypes) {
      const hotelTypesChecked = settings.hoteltypes.map((x: string) => {
        return accommodationTypes.find((type) => type.id === Number(x));
      });
      setCurHotelTypes(hotelTypesChecked);
    }
    if (settings.apartmentTypes) {
      const apartmentTypesChecked = settings.apartmentTypes.map((x: string) => {
        return accommodationTypes.find((type) => type.id === Number(x));
      });
      setCurApartmentTypes(apartmentTypesChecked);
    }
  }, []);

  useEffect(() => {
    if (curHotelTypes) {
      saveSettings({
        ...settings,
        hoteltypes: curHotelTypes.map((x) => String(x['id' as keyof typeof x])),
      });
    }
  }, [curHotelTypes]);

  useEffect(() => {
    if (curApartmentTypes) {
      saveSettings({
        ...settings,
        apartmentTypes: curApartmentTypes.map((x) => String(x['id' as keyof typeof x])),
      });
    }
  }, [curApartmentTypes]);

  useEffect(() => {
    if (curFacilities) {
      saveSettings({
        ...settings,
        facilities: curFacilities,
      });
    }
  }, [curFacilities]);

  return (
    <>
      {showSaveDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-3/5 p-3 flex flex-col bg-white border border-black rounded-md shadow">
            <div className="flex justify-end">
              <button
                onClick={() => setshowSaveDialog(false)}
                className="text-xs text-black font-extrabold"
              >
                X
              </button>
            </div>
            <div>
              <div className="pb-2">
                <p className="font-bold text-md pb-2">Update Current Preset:</p>
                <div className="flex flex-row gap-2 items-center">
                  <p>{`[Preset Name]`}</p>
                  <button
                    className="w-1/4 border border-black rounded-md bg-gray-100 hover:bg-gray-200 font-bold p-[3px]"
                    onClick={() => setshowSaveDialog(false)}
                  >
                    Update
                  </button>
                </div>
              </div>

              <div className="pb-2">
                <p className="font-bold text-md pb-2">Save as New Preset:</p>
                <p className="font-bold text-sm">Preset Name</p>
                <div className="flex flex-row justify-end gap-2 items-center">
                  <input
                    type="text"
                    value={curPresetName}
                    className="w-full border border-black rounded-md text-black text-md p-1"
                    onChange={(e) => setCurPresetName(e.target.value)}
                  />
                  <button
                    disabled={curPresetName === ''}
                    className={`w-1/4 border border-black rounded-md ${
                      curPresetName === '' ? 'bg-gray-200 text-gray-400' : 'bg-gray-100'
                    }  hover:bg-gray-200 font-bold p-[3px]`}
                    onClick={() => {
                      setPresetStatus('');
                      savePresetHandler();
                      // setshowSaveDialog(false);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
              {presetStatus !== '' && <p>{presetStatus}</p>}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowSettings(!isOpen)}
        className="p-1 text-xs text-blue-800 font-semibold underline hover:text-blue-950 hover:font-extrabold"
      >
        {!isOpen ? '+ open' : '- close'} settings
      </button>
      {isOpen && (
        <div className="flex flex-col m-4 p-2 border border-black rounded-md gap-4 shadow-lg shadow-secondary-900">
          <div className="p-2 border border-black rounded-md ">
            <p className="font-bold text-md pb-2">Presets:</p>
            <div className="flex flex-row pb-2">
              <p className="text-sm underline">Current Preset: {'[Preset Name]'}</p>
              <button
                className="p-1 text-xs text-blue-800 font-semibold underline hover:text-blue-950 hover:font-extrabold"
                onClick={() => {
                  console.log('Delete Preset');
                }}
              >
                Delete Preset
              </button>
            </div>
            <div className="pb-4 flex flex-row gap-1">
              <select
                disabled={fetchSettings.ignoreReviewAndTier}
                className="w-3/4 border border-black rounded-md text-black text-md p-[3px]"
                name="preset"
                onChange={(e) => console.log(e.target.value)}
              >
                <option value={'preset1'}>preset1</option>
                <option value={'preset2'}>preset2</option>
                <option value={'preset3'}>preset3</option>
              </select>

              <button
                className="w-1/4 border border-black rounded-md bg-gray-100 hover:bg-gray-200 font-bold p-[3px]"
                onClick={() => console.log('Load Preset Button')}
              >
                Load Preset
              </button>
              {/* <input
              type="number"
              value={curReviewScore}
              className="w-full border border-black rounded-md text-black text-md px-1"
              onChange={(e) => setCurReviewScore(Number(e.target.value))}
            /> */}
            </div>
            <button
              className="w-full border border-black rounded-md  bg-blue-100 hover:bg-blue-200 font-bold p-[3px]"
              onClick={() => {
                console.log('Save Preset Button');

                setshowSaveDialog(true);
                // get all fetchSettings
              }}
            >
              Save Preset
            </button>
          </div>
          <div className="p-2 border border-black rounded-md">
            <p className="font-bold text-md pb-2">Fetch Settings:</p>
            <div className="pt-4">
              <p className="font-bold text-sm">Ignore Review Score and Price Tier</p>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  checked={curIgnoreReviewAndPrice}
                  onChange={(e) => setCurIgnoreReviewAndPrice(e.target.checked)}
                />
                <p className="text-sm ml-2">
                  Don&apos;t search accommodations based on Reviews and Price Tiers
                </p>
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
                  checked={settings.useReviewQuantity}
                  onChange={(e) =>
                    saveSettings({ ...settings, useReviewQuantity: e.target.checked })
                  }
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

            <div className="pt-4 flex flex-row items-center">
              <button
                className="p-1 text-xs text-blue-800 font-semibold underline hover:text-blue-950 hover:font-extrabold"
                onClick={saveHandler}
              >
                Save Fetch Settings
              </button>

              <p className="text-xs italic">
                For fetch settings to take effect, click on &apos;Save Fetch Settings&apos;
                ***Updating these fetch settings will force a refetch of accommodations.
              </p>
            </div>
          </div>

          <div className="p-2 border border-black rounded-md">
            <p className="font-bold text-md pb-2">Display Settings:</p>
            <div className="pt-1">
              <p className="font-bold text-sm ">
                Search Multiple Prices **will take significanly more time to load
              </p>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  checked={settings.fetchMultiplePrices}
                  onChange={(e) => {
                    saveSettings({ ...settings, fetchMultiplePrices: e.target.checked });
                  }}
                />
                <p className="text-sm ml-2">
                  Search prices for current month and the next 4 months
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="font-bold text-sm ">Google Search Radius (meters)</p>
              <input
                type="number"
                value={settings.googleSearchRadius}
                className="w-full border border-black rounded-md px-1"
                onChange={(e) =>
                  saveSettings({ ...settings, googleSearchRadius: Number(e.target.value) })
                }
              />
            </div>
            <div className="pt-4">
              <p className="font-bold text-sm ">Limit Search Results</p>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  checked={settings.showTopTen}
                  onChange={(e) => saveSettings({ ...settings, showTopTen: e.target.checked })}
                />
                <p className="text-sm ml-2">Show Top 10</p>
              </div>
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  checked={settings.showFlats}
                  onChange={(e) => saveSettings({ ...settings, showFlats: e.target.checked })}
                />
                <p className="text-sm ml-2">Show Flats</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="font-bold text-sm">Hotel Types</p>
              <div className="grid grid-cols-4 gap-1">
                {accommodationTypes.map((type) => {
                  const isChecked = curHotelTypes?.find(
                    (x) => x['id' as keyof typeof x] === type.id
                  );
                  return (
                    <div key={`hotels_${type.id}`} className="flex flex-row items-center">
                      <input
                        type="checkbox"
                        checked={isChecked ? true : false}
                        onChange={(e) => {
                          if (e.target.checked) {
                            if (curHotelTypes) setCurHotelTypes([...curHotelTypes, type]);
                            else setCurHotelTypes([type]);
                          } else {
                            const newTypes = curHotelTypes?.filter(
                              (x) => x['id' as keyof typeof x] !== type.id
                            );
                            setCurHotelTypes(newTypes);
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
              <p className="font-bold text-sm">Apartment Types</p>
              <div className="grid grid-cols-4 gap-1">
                {accommodationTypes.map((type) => {
                  const isChecked = curApartmentTypes?.find(
                    (x) => x['id' as keyof typeof x] === type.id
                  );
                  return (
                    <div key={`apartments_${type.id}`} className="flex flex-row items-center">
                      <input
                        type="checkbox"
                        checked={isChecked ? true : false}
                        onChange={(e) => {
                          if (e.target.checked) {
                            if (curApartmentTypes)
                              setCurApartmentTypes([...curApartmentTypes, type]);
                            else setCurApartmentTypes([type]);
                          } else {
                            const newTypes = curApartmentTypes?.filter(
                              (x) => x['id' as keyof typeof x] !== type.id
                            );
                            setCurApartmentTypes(newTypes);
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
                      facilityHandler(e.target.checked, 0);
                    }}
                  />
                  <p className="text-sm ml-1 line-through">***1km away from an airport</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={curFacilities.includes(8)}
                    onChange={(e) => {
                      facilityHandler(e.target.checked, 8);
                    }}
                  />
                  <p className="text-sm ml-1">24-hour Front Desk</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={curFacilities.includes(17)}
                    onChange={(e) => {
                      facilityHandler(e.target.checked, 17);
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
                      facilityHandler(e.target.checked, 28);
                    }}
                  />
                  <p className="text-sm ml-1">Family Rooms</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={curFacilities.includes(21)}
                    onChange={(e) => {
                      facilityHandler(e.target.checked, 21);
                    }}
                  />
                  <p className="text-sm ml-1">Baby Sitting Services</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={curFacilities.includes(56)}
                    onChange={(e) => {
                      facilityHandler(e.target.checked, 56);
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
                      facilityHandler(e.target.checked, 149);
                    }}
                  />
                  <p className="text-sm ml-1">Adults Only</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={curFacilities.includes(7)}
                    onChange={(e) => {
                      facilityHandler(e.target.checked, 7);
                    }}
                  />
                  <p className="text-sm ml-1">Bar</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={curFacilities.includes(15)}
                    onChange={(e) => {
                      facilityHandler(e.target.checked, 15);
                    }}
                  />
                  <p className="text-sm ml-1">Terraces</p>
                </div>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={curFacilities.includes(192)}
                    onChange={(e) => {
                      facilityHandler(e.target.checked, 192);
                    }}
                  />
                  <p className="text-sm ml-1">Rooftop Pool</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
