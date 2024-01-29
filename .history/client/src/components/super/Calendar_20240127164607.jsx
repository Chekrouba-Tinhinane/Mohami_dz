import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactCalendar from "react-calendar";
import { FixedSizeList } from "react-window";
import { add, format, isAfter } from "date-fns";
import { getDaysArray, INTERVAL } from "../../config";
import "../../Calendar.css";

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

const TimeSelection = ({ allTimes, activeTime, onClick, onCancel, onNext }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.2 },
    }}
    className="bg-white flex flex-col justify-around px-3 py-2 rounded-md"
  >
    <div className="mb-3 border-b pb-2 flex justify-between items-center px-1">
      <h4 className="">Selected time slot:</h4>
      <span
        onClick={onCancel}
        className="border p-1.5 cursor-pointer hover:bg-gray-300"
      >
        Back
      </span>
    </div>
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
      style={{ overflowY: "scroll", scrollbarColor: "#D4AD6B" }}
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
    <div className="flex justify-between mt-3">
      <button onClick={onCancel} className="bg-red-500 text-white p-2 rounded">
        Cancel
      </button>
      <button onClick={onNext} className="bg-blue-500 text-white p-2 rounded">
        Book Appointment
      </button>
    </div>
  </motion.div>
);

export const Calendar = () => {
  const [date, setDate] = useState({
    justDate: undefined,
    dateTime: undefined,
  });

  const [activeTime, setActiveTime] = useState(null);
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
    setActiveTime(null);
    setShowTimeSelection(false); // Close time selection when a new date is selected
  };

  const handleTimeRowClick = (selectedTime) => {
    setActiveTime(selectedTime);
  };

  const handleNextButtonClick = () => {
    setShowTimeSelection(true);
  };

  const handleBooking = () => {
    // Logic for booking the appointment
    console.log("Appointment booked!");
  };

  const [allTimes, setAllTimes] = useState([]);

  useEffect(() => {
    setAllTimes(getTimes());
  }, [date.justDate]);

  const maxDate = add(new Date(), { days: 30 });
  const tileDisabled = ({ date }) => isAfter(date, maxDate);

  return (
    <div className="flex flex-col my-8">
      <div className=" w-[95%] flex gap-6 justify-center">
        <div className="flex flex-col">
          <h2>Choose date and time</h2>
          <div className="flex">
            {showTimeSelection ? (
              <div className="ml-4">
                <p>2/ Choose Time:</p>
                <TimeSelection
                  allTimes={allTimes}
                  activeTime={activeTime}
                  onClick={handleTimeRowClick}
                  onCancel={() => setShowTimeSelection(false)}
                  onNext={handleBooking}
                />
              </div>
            ) : (
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { type: "tween", duration: 0.2 },
                  }}
                  className="bg-white flex flex-col justify-around pl-3 py-2 pr-3 rounded-md"
                >
                  <ReactCalendar
                    minDate={new Date()}
                    maxDate={maxDate}
                    className="REACT-CALENDAR"
                    view="month"
                    onClickDay={handleDateClick}
                    tileDisabled={tileDisabled}
                  />
                  {date.justDate && (
                    <motion.button
                      onClick={handleNextButtonClick}
                      className="mt-3 bg-blue-500 text-white p-2 rounded"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { type: "tween", duration: 0.2 },
                      }}
                    >
                      Next
                    </motion.button>
                  )}
                  <button
                    onClick={() => setDate((prevDate) => ({ ...prevDate, justDate: undefined }))}
                    className="mt-3 bg-red-500 text-white p-2 rounded"
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
