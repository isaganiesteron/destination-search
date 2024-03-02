import moment from "moment";
import React, { useEffect, useState } from "react";

type DateDialogProps = {
  setCurrentDates: Function;
  closeDialog: Function;
};

const DateDialog = ({ setCurrentDates, closeDialog }: DateDialogProps) => {
  const [dateOptions, setDateOptions] = useState<object[]>();
  useEffect(() => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let currentMonthIndex = moment().month(); // get the current month as a zero-based index
    setDateOptions([
      ...months.slice(currentMonthIndex).map((x) => {
        return { month: x, year: moment().year() };
      }),
      ...months.slice(0, currentMonthIndex).map((x) => {
        return { month: x, year: moment().add(1, "year").year() };
      }),
    ]);
  }, []);
  return (
    <div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
      <div className="flex flex-col">
        <p className="font-bold text-md">How long do you want to stay?</p>
        <div className="flex flex-row">
          <div className="flex flex-row gap-2 px-4 p-1">
            <input
              type="radio"
              name="duration"
              onClick={() => {
                console.log("Chose A");
              }}
            />
            <p>A weekend</p>
          </div>
          <div className="flex flex-row gap-2 px-4 p-1">
            <input
              type="radio"
              name="duration"
              onClick={() => {
                console.log("Chose B");
              }}
            />
            <p>A week</p>
          </div>
          <div className="flex flex-row gap-2 px-4 p-1">
            <input
              type="radio"
              name="duration"
              onClick={() => {
                console.log("Chose C");
              }}
            />
            <p>A month</p>
          </div>
        </div>
        <p className="font-bold text-md">When do you want to go?</p>
        <div className="flex flex-row flex-wrap">
          {dateOptions &&
            dateOptions.map((month, i) => {
              return (
                <button
                  key={i}
                  className="p-4 m-2 border border-gray-500 rounded-md hover:bg-gray-200"
                  onClick={() => {
                    console.log(
                      `Chose ${month["month" as keyof typeof month]} ${
                        month["year" as keyof typeof month]
                      }`
                    );
                  }}
                >
                  <p className="font-bold">
                    {month["month" as keyof typeof month]}
                  </p>
                  <p>{month["year" as keyof typeof month]}</p>
                </button>
              );
            })}
        </div>
      </div>
      <div className="border-b-2 border-gray-200"></div>
      <div className="flex flex-row gap-3 justify-end">
        <button
          className="p-1 px-4  hover:text-blue-400"
          onClick={() => closeDialog(false)}
        >
          Close
        </button>
        <button className="p-1 px-4  hover:text-blue-400">Select Dates</button>
      </div>
    </div>
  );
};

export default DateDialog;
