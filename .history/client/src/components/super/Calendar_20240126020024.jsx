import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactCalendar from "react-calendar";
import { FixedSizeList } from "react-window";
import { add, format, isAfter } from "date-fns";
import { getDaysArray, INTERVAL } from "../../config";
/* import Availability from "./Availability";
 */ import "../../Calendar.css";

const TimeRow = ({ index, style, data, activeTime, onClick }) => {
  const isActive = activeTime
    ? activeTime.getTime() === data[index].getTime()
    : false;

  return (
    <div
      style={{ ...style }}
      className={`py-2 px-3 cursor-pointer font-semibold hover:bg-gray-200 rounded-md my-3 ${
        isActive ? " bg-blue-200 hover:bg-blue-200" : ""
      }`}
      onClick={() => onClick(data[index])}
    >
      {format(data[index], "kk:mm")}
    </div>
  );
};

const TimeSelection = ({ allTimes, activeTime, onClick }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    }}
    className="bg-white flex flex-col justify-around px-3 py-2 rounded-md"
  >
    <FixedSizeList
      height={360}
      width={200}
      itemSize={50}
      itemCount={allTimes.length}
      itemData={{
        times: allTimes,
        activeTime,
        onClick,
      }}
    >
      {({ index, style }) => (
        <TimeRow
          index={index}
          style={style}
          data={allTimes}
          activeTime={activeTime}
          onClick={onClick}
        />
      )}
    </FixedSizeList>
  </motion.div>
);

export const Calendar = () => {
  const [date, setDate] = useState({
    justDate: undefined,
    dateTime: undefined,
  });

  const [activeTime, setActiveTime] = useState(null);
  const [showDateTimeWindow, setShowDateTimeWindow] = useState(true);
  const [showTimeSelection, setShowTimeSelection] = useState(false);
  const [daysArray, setDaysArray] = useState(getDaysArray());

  const handleUpdateDaysArray = (updatedDaysArray) => {
    setDaysArray(updatedDaysArray);
  };

  const getTimes = () => {
    if (!date.justDate) return [];
    const { justDate } = date;
    const selectedDay = daysArray.find(
      (day) => day.date.getTime() === justDate.getTime()
    );

    const beginningMorning = add(justDate, {
      hours: selectedDay.morning.openingTime,
    });
    const endMorning = add(justDate, {
      hours: selectedDay.morning.closingTime,
    });
    const beginningAfternoon = add(justDate, {
      hours: selectedDay.afternoon.openingTime,
    });
    const endAfternoon = add(justDate, {
      hours: selectedDay.afternoon.closingTime,
    });
    const interval = INTERVAL;

    const times = [];
    for (
      let i = beginningMorning;
      i <= endMorning;
      i = add(i, { minutes: interval })
    ) {
      times.push(new Date(i));
    }

    for (
      let i = beginningAfternoon;
      i <= endAfternoon;
      i = add(i, { minutes: interval })
    ) {
      times.push(new Date(i));
    }
    return times;
  };

  const handleDateClick = (selectedDate) => {
    setDate((prev) => ({ ...prev, justDate: selectedDate }));
    setShowDateTimeWindow(false);
    setShowTimeSelection(true);
  };

  const handleTimeRowClick = (selectedTime) => {
    setActiveTime(selectedTime);
    console.log(activeTime);
  };

  const handleTimeSelectionBackClick = () => {
    setShowDateTimeWindow(true);
    setShowTimeSelection(false);
  };

  const handleNextButtonClick = () => {
    setShowDateTimeWindow(false);
    setShowTimeSelection(true);
  };

  const handleCalendarClose = () => {
    setDate((prevDate) => ({ ...prevDate, justDate: undefined }));
    setShowDateTimeWindow(true);
    setShowTimeSelection(false);
  };

  useEffect(() => {
    if (date.justDate) {
      setShowDateTimeWindow(false);
      setShowTimeSelection(true);
    } else {
      setShowDateTimeWindow(true);
      setShowTimeSelection(false);
    }
  }, [date.justDate]);

  const [allTimes, setAllTimes] = useState([]);

  useEffect(() => {
    setAllTimes(getTimes());
  }, [date.justDate, showTimeSelection]);

  const maxDate = add(new Date(), { days: 30 });
  const tileDisabled = ({ date }) => isAfter(date, maxDate);

  return (
    <div className=" flex flex-col">
      <div className="bg-slate-600 flex w-screen gap-6 justify-center">
        <div className="">
          {showDateTimeWindow && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { type: "tween", duration: 0.2 },
              }}
              className="bg-white flex flex-col justify-around pl-3 py-2 pr-3 rounded-md"
            >
              <h2>Select a Date</h2>
              <ReactCalendar
                minDate={new Date()}
                maxDate={maxDate}
                className="REACT-CALENDAR"
                view="month"
                onClickDay={handleDateClick}
                tileDisabled={tileDisabled}
              />
              <button
                onClick={handleCalendarClose}
                className="mt-3 bg-red-500 text-white p-2 rounded"
              >
                Close
              </button>
            </motion.div>
          )}
        </div>
        {showTimeSelection && (
          <div className="flex items-center">
            <div className=" flex flex-col">
              <TimeSelection
                allTimes={allTimes}
                activeTime={activeTime}
                onClick={handleTimeRowClick}
              />
              {activeTime && (
                <motion.button
                  onClick={handleNextButtonClick}
                  className="mt-3 bg-blue-500 text-white p-2 rounded"
                >
                  Next (Show Form)
                </motion.button>
              )}
              <motion.button
                onClick={handleTimeSelectionBackClick}
                className="mt-3 bg-blue-500 text-white p-2 rounded"
              >
                Back
              </motion.button>
            </div>
          </div>
        )}
      </div>
      {/* <Availability
        daysArray={daysArray}
        onUpdateDaysArray={handleUpdateDaysArray}
      /> */}
    </div>
  );
};

export default Calendar;
