import moment from 'moment';
import React, { useEffect, useState } from 'react';

type DateDialogProps = {
  isOpen: boolean;
  dateDialogValues: { duration: string; monthYear: string };
  setDialogValues: Function;
  setCurrentDates: Function;
  closeDialog: Function;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateDialog = ({
  isOpen,
  dateDialogValues,
  setDialogValues,
  setCurrentDates,
  closeDialog,
}: DateDialogProps) => {
  const [dateOptions, setDateOptions] = useState<object[]>();
  const [currentDuration, setCurrentDuration] = useState<string>(dateDialogValues.duration);
  const [currentMonthYear, setCurrentMonthYear] = useState<string>(dateDialogValues.monthYear);
  const [currentCheckin, setCurrentCheckin] = useState<string>('');
  const [checkinError, setCheckinError] = useState<object>({
    status: false,
    message: '',
  });
  const [currentCheckout, setCurrentCheckout] = useState<string>('');
  const [checkoutError, setCheckoutError] = useState<object>({
    status: false,
    message: '',
  });

  const _handleCheckinValidation = (value: string) => {
    const date = moment(value, 'MM/DD/YYYY', true);
    setCurrentCheckin(value);
    if (!date.isValid()) {
      setCheckinError({
        status: !date.isValid(),
        message: 'Invalid date',
      });
    } else if (date.startOf('day').isBefore(moment().startOf('day'))) {
      setCheckinError({
        status: true,
        message: 'Checkin date is in the past',
      });
    } else {
      // check if checkin is before checkout
      const checkout = moment(currentCheckout, 'MM/DD/YYYY', true);
      if (checkout.isValid() && (date.isAfter(checkout) || date.isSame(checkout))) {
        setCheckinError({
          status: true,
          message: 'Checkin date is after or the same as checkout date',
        });
      } else {
        // checkin is valid so pass it to setCurrentDates
        setCurrentDates({
          checkin: date.format('YYYY-MM-DD'),
          checkout: moment(currentCheckout, 'MM/DD/YYYY').format('YYYY-MM-DD'),
        });

        setCheckinError({
          status: false,
          message: '',
        });
      }
    }
  };

  const _handleCheckoutValidation = (value: string) => {
    const date = moment(value, 'MM/DD/YYYY', true);
    setCurrentCheckout(value);
    if (!date.isValid()) {
      setCheckoutError({
        status: !date.isValid(),
        message: 'Invalid date',
      });
    } else if (date.startOf('day').isSameOrBefore(moment().startOf('day'))) {
      setCheckinError({
        status: true,
        message: 'Checkout date is today or in the past',
      });
    } else {
      // check if checkout is after checkout
      const checkin = moment(currentCheckin, 'MM/DD/YYYY', true);
      if (checkin.isValid() && (date.isBefore(checkin) || date.isSame(checkin))) {
        setCheckoutError({
          status: true,
          message: 'Checkout date is before or the same as checkin date',
        });
      } else {
        // checkout is valid so pass it to setCurrentDates
        setCurrentDates({
          checkin: moment(currentCheckin, 'MM/DD/YYYY').format('YYYY-MM-DD'),
          checkout: date.format('YYYY-MM-DD'),
        });

        setCheckoutError({
          status: false,
          message: '',
        });
      }
    }
  };

  useEffect(() => {
    let currentMonthIndex = moment().month(); // get the current month as a zero-based index
    setDateOptions([
      ...months.slice(currentMonthIndex).map((x) => {
        return { month: x, year: moment().year() };
      }),
      ...months.slice(0, currentMonthIndex).map((x) => {
        return { month: x, year: moment().add(1, 'year').year() };
      }),
    ]);
  }, []);

  useEffect(() => {
    setDialogValues({ duration: currentDuration, monthYear: currentMonthYear });
    if (currentDuration !== '' && currentMonthYear !== '') {
      // Day is default
      let curCheckin = moment(currentMonthYear, 'MMMYYYY').startOf('month');
      if (curCheckin.isBefore(moment())) curCheckin = moment();
      let curCheckout = moment(curCheckin).add(1, 'day');

      if (currentDuration === 'week') {
        curCheckout = moment(curCheckin).add(7, 'days');
      } else if (currentDuration === 'month') {
        curCheckout = moment(curCheckin).add(1, 'month');
      } else if (currentDuration === 'weekend') {
        const dayOfWeek = curCheckin.day();
        if (dayOfWeek === 0) {
          // Sunday
          curCheckin = curCheckin.subtract(1, 'day');
        } else if (dayOfWeek !== 6) {
          // Any other day other than Saturday
          curCheckin = curCheckin.add(6 - dayOfWeek, 'days');
        }
        curCheckout = moment(curCheckin).add(1, 'day');
      }
      setCurrentDates({
        checkin: curCheckin.format('YYYY-MM-DD'),
        checkout: curCheckout.format('YYYY-MM-DD'),
      });

      setCurrentCheckin(curCheckin.format('MM/DD/YYYY'));
      setCurrentCheckout(curCheckout.format('MM/DD/YYYY'));
    }
  }, [currentDuration, currentMonthYear]);

  return (
    <>
      {isOpen && (
        <div className="p-4 w-full border-2 border-black flex flex-col rounded-md gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 mb-4">
              <div className="flex flex-col">
                <p
                  className={`font-bold text-md ${
                    checkinError['status' as keyof typeof checkinError] && 'text-red-500'
                  }`}
                >
                  Check In
                </p>
                <input
                  type="text"
                  value={currentCheckin}
                  className={`${
                    checkinError['status' as keyof typeof checkinError]
                      ? 'border-2 border-red-500 focus:border-2 focus:border-red-500 focus:outline-none'
                      : 'border border-black'
                  } rounded-md p-[5.5px] w-min`}
                  onChange={(e) => _handleCheckinValidation(e.target.value)}
                />
                {checkinError['status' as keyof typeof checkinError] && (
                  <p className="text-sm text-red-500 w-48">
                    {checkinError['message' as keyof typeof checkinError]}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <p
                  className={`font-bold text-md ${
                    checkoutError['status' as keyof typeof checkoutError] && 'text-red-500'
                  }`}
                >
                  Check Out
                </p>
                <input
                  type="text"
                  value={currentCheckout}
                  className={`${
                    checkoutError['status' as keyof typeof checkoutError]
                      ? 'border-2 border-red-500 focus:border-2 focus:border-red-500 focus:outline-none'
                      : 'border border-black'
                  } rounded-md p-[5.5px] w-min`}
                  onChange={(e) => _handleCheckoutValidation(e.target.value)}
                />
                {checkoutError['status' as keyof typeof checkoutError] && (
                  <p className="text-sm text-red-500 w-48">
                    {checkoutError['message' as keyof typeof checkoutError]}
                  </p>
                )}
              </div>
            </div>
            <p className="font-bold text-md">How long do you want to stay?</p>
            <div className="flex flex-row">
              <div className="flex flex-row gap-2 px-4 p-1">
                <input
                  readOnly
                  checked={currentDuration === 'day'}
                  type="radio"
                  name="duration"
                  onClick={() => setCurrentDuration('day')}
                />
                <p>A day</p>
              </div>
              <div className="flex flex-row gap-2 px-4 p-1">
                <input
                  readOnly
                  checked={currentDuration === 'weekend'}
                  type="radio"
                  name="duration"
                  onClick={() => setCurrentDuration('weekend')}
                />
                <p>A weekend</p>
              </div>
              <div className="flex flex-row gap-2 px-4 p-1">
                <input
                  readOnly
                  checked={currentDuration === 'week'}
                  type="radio"
                  name="duration"
                  onClick={() => setCurrentDuration('week')}
                />
                <p>A week</p>
              </div>
              <div className="flex flex-row gap-2 px-4 p-1">
                <input
                  readOnly
                  checked={currentDuration === 'month'}
                  type="radio"
                  name="duration"
                  onClick={() => setCurrentDuration('month')}
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
                    `${month['month' as keyof typeof month]}${month['year' as keyof typeof month]}`;
                  return (
                    <button
                      key={i}
                      className={`p-4 m-2 border rounded-md ${
                        curSelected
                          ? 'border-blue-900 bg-blue-100'
                          : 'border-gray-500 hover:bg-gray-200'
                      } `}
                      onClick={() =>
                        setCurrentMonthYear(
                          `${month['month' as keyof typeof month]}${
                            month['year' as keyof typeof month]
                          }`
                        )
                      }
                    >
                      <p className="font-bold">{month['month' as keyof typeof month]}</p>
                      <p>{month['year' as keyof typeof month]}</p>
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="border-b-2 border-gray-200"></div>
          <div className="flex flex-row gap-3 justify-end">
            <button className="p-1 px-4  hover:text-blue-400" onClick={() => closeDialog(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DateDialog;
