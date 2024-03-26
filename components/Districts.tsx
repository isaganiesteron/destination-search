import React from "react";

const Districts = ({
  currentDistricts,
  selectedDistricts,
  setSelectedDistricts,
}: {
  currentDistricts: object[];
  selectedDistricts: number[];
  setSelectedDistricts: Function;
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
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedDistricts([...selectedDistricts, districtId]);
                } else {
                  setSelectedDistricts(
                    selectedDistricts.filter((id) => id !== districtId)
                  );
                }
              }}
            />
            <p className="text-sm ml-1">{districtName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Districts;
