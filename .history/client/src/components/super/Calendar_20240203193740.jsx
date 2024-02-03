import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactCalendar from "react-calendar";
import { FixedSizeList } from "react-window";
import { add, format, isAfter, differenceInMinutes } from "date-fns";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { getDaysArray, INTERVAL } from "../../config";
import "../../Calendar.css";
import axios from "axios";
import { useUserData } from "../../App";
import { toast, Toaster } from "react-hot-toast";

const TimeRow = ({ index, style, data, activeTime, onClick }) => {
  const { t } = useTranslation(); // Use useTranslation hook
  const isActive = activeTime ? true : false;

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

const TimeSelection = ({
  allTimes,
  activeTime,
  onClick,
  onCancel,
  onNext,
  onClose,
}) => {
  const { t } = useTranslation(); // Use useTranslation hook

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 0.4 },
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: { type: "tween", duration: 0.4 },
      }}
      className="bg-white flex flex-col justify-around px-3 py-2 ml-3 rounded-md modal"
      style={{ height: "430px" }} // Fixed height for time selection container
    >
      <div className="mb-3 border-b pb-2 flex justify-between items-center px-1">
        <span
          onClick={onCancel}
          className="border p-1.5 cursor-pointer hover:bg-gray-300"
        >
          {t("Back")}
        </span>
      </div>
      <FixedSizeList
        height={260} // Fixed height for the list of time slots
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
      <div className="flex justify-between mt-2">
        <button
          onClick={() => {
            onNext();
            onClose(); // Close the modal on booking
          }}
          className="bg-primary text-white px-3 py-2 rounded-sm"
        >
          {t("Book an Appointment")}
        </button>
      </div>
    </motion.div>
  );
};

export const Calendar = ({ isOpen, onOpen, lawyer, onClose }) => {
  const { userData } = useUserData();
  const { t } = useTranslation();

  const [availabilityIntervals, setAvailabilityIntervals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false); // State to track modal visibility
  useEffect(() => {
    const fetchAvailabilityIntervals = async () => {
      try {
        const response = await axios.post(
          "http://192.168.137.210:8000/creneau/afficher",
          lawyer?.avocat?.id
        );
        console.log(response.data);
        setAvailabilityIntervals(response.data); // Store availability intervals
        setLoading(false);
      } catch (error) {
        console.error("Error fetching availability intervals:", error);
        setLoading(false);
      }
    };

    fetchAvailabilityIntervals();
  }, []);

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

  const calculateAppointmentSlots = (start, end, maxAppointments) => {
    const durationInMinutes = differenceInMinutes(end, start);
    const appointmentDuration = durationInMinutes / maxAppointments;
    const appointmentSlots = [];

    let currentSlot = new Date(start);
    for (let i = 0; i < maxAppointments; i++) {
      const nextSlot = add(currentSlot, { minutes: appointmentDuration });
      appointmentSlots.push({ start: currentSlot, end: nextSlot });
      currentSlot = nextSlot;
    }

    return appointmentSlots;
  };

  const getTimes = () => {
    if (!date.justDate) return [];
    const { justDate } = date;
    const selectedDay = daysArray.find(
      (day) => day.date.getTime() === justDate.getTime()
    );

    const availableIntervals = availabilityIntervals.filter(
      (interval) =>
        format(interval.DateInterval, "yyyy-MM-dd") ===
        format(justDate, "yyyy-MM-dd")
    );

    if (availableIntervals.length === 0) {
      return []; // No available slots for this date
    }

    const { HeureDebut, HeureFin, NbrMaxRdv } = availableIntervals[0];

    const start = add(justDate, { hours: Number(HeureDebut.split(":")[0]) });
    const end = add(justDate, { hours: Number(HeureFin.split(":")[0]) });

    const appointmentSlots = calculateAppointmentSlots(start, end, NbrMaxRdv);

    return appointmentSlots.map((slot) => slot.start);
  };

  const handleDateClick = (selectedDate) => {
    setDate((prev) => ({ ...prev, justDate: selectedDate }));
    setActiveTime(null);
    setShowTimeSelection(true); // Changed to true to show time selection on date click
  };

  const handleTimeRowClick = (selectedTime) => {
    // Find the availability interval corresponding to the selected time
    const selectedInterval = availabilityIntervals.find((interval) => {
      const intervalStartTime = new Date(
        `${interval.DateInterval}T${interval.HeureDebut}`
      );
      const intervalEndTime = new Date(
        `${interval.DateInterval}T${interval.HeureFin}`
      );
      return (
        selectedTime >= intervalStartTime && selectedTime < intervalEndTime
      );
    });

    // If the corresponding interval is found, set it as the activeTime
    if (selectedInterval) {
      setActiveTime(selectedInterval);
    } else {
      console.error("No availability interval found for the selected time.");
    }
  };

  const [allTimes, setAllTimes] = useState([]);

  useEffect(() => {
    setAllTimes(getTimes());
  }, [date.justDate]);

  const next7Days = Array.from({ length: 7 }, (_, index) =>
    add(new Date(), { days: index })
  );

  const maxDate = add(new Date(), { days: 7 });
  const tileDisabled = ({ date }) => isAfter(date, maxDate);
  const tileClassName = ({ date }) =>
    next7Days.some(
      (day) => format(day, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    )
      ? "next-7-days"
      : null;

  const handleBooking = async () => {
    // Define the booking data
    const bookingData = {
      id_client: userData?.userID, // Replace with the actual client ID
      id_avocat: lawyer?.avocat?.id, // Replace with the actual lawyer ID
      id_interval_libre: activeTime.id, // Replace with the actual free time slot ID
    };
    console.log(bookingData);

    try {
      // Make a POST request to book the appointment
      const response = await axios.post(
        "http://192.168.137.210:8000/rdv/prendre_rdv",
        bookingData
      );
      // Log the response data and a success message
      console.log(response.data);
      console.log(response);
      response.data.erreur
        ? toast.error(
            "Nombre maximum de rendez-vous atteint pour cette période."
          )
        : toast.success("Rendez-vous pris! Merci!");

      setShowTimeSelection(false); // Close the modal
      onClose(false);
    } catch (error) {
      // Log any errors
      toast.error("Error booking appointment:", error);
    }
  };

  return (
    <div className="flex flex-col my-8">
      <div className="w-[100%] flex gap-6 justify-center">
        <div className="flex flex-col">
          <div className="flex">
            {showTimeSelection ? (
              <div className=" ">
                {allTimes.length > 0 ? (
                  <TimeSelection
                    allTimes={allTimes}
                    activeTime={activeTime}
                    onClick={handleTimeRowClick}
                    onCancel={() => setShowTimeSelection(false)}
                    onNext={handleBooking}
                    onClose={() => setModalOpen(false)} // Pass onClose function
                  />
                ) : (
                  <div className=" text-center w-full gap-3 flex flex-col items-center">
                    <div className="font-semibold text-center">
                      {t("No available time slots for this date")}
                    </div>
                    <p
                      className="hover:bg-primary hover:text-white text-primary cursor-pointer border border-primary px-4 py-2 rounded-sm"
                      onClick={() => {
                        setShowTimeSelection(false);
                      }}
                    >
                      {t("Choose another date")}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { type: "tween", duration: 0.4 },
                  }}
                  className="bg-white flex flex-col justify-around pl-3 py-2 pr-3 rounded-md"
                  style={{}} // Fixed height for calendar container
                >
                  <ReactCalendar
                    minDate={new Date()}
                    maxDate={maxDate}
                    className="REACT-CALENDAR"
                    view="month"
                    onClickDay={handleDateClick}
                    tileDisabled={tileDisabled}
                    tileClassName={tileClassName}
                  />
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
