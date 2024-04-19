import React, { useState } from 'react';

const Districts = ({
  currentDistricts,
  selectedDistricts,
  setSelectedDistricts,
}: {
  currentDistricts: object[];
  selectedDistricts: number[];
  setSelectedDistricts: Function;
}) => {
  const [allIsChecked, setAllIsChecked] = useState<boolean>(false);
  return (
    <>
      <div className="grid grid-cols-5 gap-1 ">
        {currentDistricts.map((district, i) => {
          const districtName = district['name' as keyof typeof district];
          const districtId = district['id' as keyof typeof district];
          return (
            <div key={i} className="flex flex-row items-center">
              <input
                type="checkbox"
                className="district-checkbox"
                checked={selectedDistricts.includes(districtId)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDistricts([...selectedDistricts, districtId]);
                  } else {
                    setSelectedDistricts(selectedDistricts.filter((id) => id !== districtId));
                  }
                }}
              />
              <p className="text-sm ml-1">{districtName}</p>
            </div>
          );
        })}
      </div>

      <button
        className="justify-center mt-2 p-1 text-xs text-blue-800 font-semibold underline hover:text-blue-950 hover:font-extrabold"
        onClick={() => {
          const currentAllSelect = allIsChecked
            ? []
            : currentDistricts.map((district) => district['id' as keyof typeof district]);
          setSelectedDistricts(currentAllSelect);
          setAllIsChecked(!allIsChecked);
        }}
      >
        {allIsChecked ? 'Unselect All' : 'Select All'}
      </button>
    </>
  );
};

export default Districts;
