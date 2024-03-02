import moment from "moment";
import React, { useEffect, useState } from "react";

type DateDialogProps = {
  setCurrentDates: Function;
  closeDialog: Function;
};

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

const DateDialog = ({ setCurrentDates, closeDialog }: DateDialogProps) => {
  const [dateOptions, setDateOptions] = useState<object[]>();
  const [currentDuration, setCurrentDuration] = useState<string>("day");
  const [currentMonthYear, setCurrentMonthYear] = useState<string>(
    `${moment().format("MMM")}${moment().format("YYYY")}`
  );

  useEffect(() => {
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

  useEffect(() => {
    if (currentDuration !== "" && currentMonthYear !== "") {
      console.log("Duration and month/year selected");
      console.log(currentDuration, currentMonthYear);
      if (currentMonthYear === "") {
        // make month and year current
      }
    }

    // setCurrentDates({ checkin: "2022-01-01", checkout: "2022-01-02" });
  }, [currentDuration, currentMonthYear]);

  return (
    <div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
      <div className="flex flex-col">
        <p className="font-bold text-md">How long do you want to stay?</p>
        <div className="flex flex-row">
          <div className="flex flex-row gap-2 px-4 p-1">
            <input
              checked={currentDuration === "day"}
              type="radio"
              name="duration"
              onClick={() => setCurrentDuration("day")}
            />
            <p>A day</p>
          </div>
          <div className="flex flex-row gap-2 px-4 p-1">
            <input
              checked={currentDuration === "weekend"}
              type="radio"
              name="duration"
              onClick={() => setCurrentDuration("weekend")}
            />
            <p>A weekend</p>
          </div>
          <div className="flex flex-row gap-2 px-4 p-1">
            <input
              checked={currentDuration === "week"}
              type="radio"
              name="duration"
              onClick={() => setCurrentDuration("week")}
            />
            <p>A week</p>
          </div>
          <div className="flex flex-row gap-2 px-4 p-1">
            <input
              checked={currentDuration === "month"}
              type="radio"
              name="duration"
              onClick={() => setCurrentDuration("month")}
            />
            <p>A month</p>
          </div>
        </div>
        <p className="font-bold text-md">When do you want to go?</p>
        <div className="flex flex-row flex-wrap">
          {dateOptions &&
            dateOptions.map((month, i) => {
              const curSelected =
                currentMonthYear ===
                `${month["month" as keyof typeof month]}${
                  month["year" as keyof typeof month]
                }`;
              return (
                <button
                  key={i}
                  className={`p-4 m-2 border rounded-md ${
                    curSelected
                      ? "border-blue-900 bg-blue-100"
                      : "border-gray-500 hover:bg-gray-200"
                  } `}
                  onClick={() =>
                    setCurrentMonthYear(
                      `${month["month" as keyof typeof month]}${
                        month["year" as keyof typeof month]
                      }`
                    )
                  }
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
