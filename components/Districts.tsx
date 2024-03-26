import React from "react";

const Districts = ({
  currentDistricts,
  selectedDistricts,
}: {
  currentDistricts: object[];
  selectedDistricts: number[];
}) => {
  return (
    <div className="grid grid-cols-5 gap-1 ">
      {currentDistricts.map((district, i) => {
        const districtName = district["name" as keyof typeof district];
        const districtId = district["id" as keyof typeof district];
        return (
          <div key={i} className="flex flex-row items-center">
            <input
              type="checkbox"
              checked={selectedDistricts.includes(districtId)}
            />
            <p className="text-sm ml-1">{districtName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Districts;
