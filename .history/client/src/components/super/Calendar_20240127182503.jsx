// Import statements remain the same

export const Calendar = ({ avocat }) => {
  const [availabilityIntervals, setAvailabilityIntervals] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAvailabilityIntervals = async () => {
      try {
        const response = await axios.post(
          "http://192.168.137.210:8000/creneau/afficher",
          1
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

  const next7Days = Array.from({ length: 7 }, (_, index) =>
    add(new Date(), { days: index })
  );

  const maxDate = add(new Date(), { days: 30 });
  const tileDisabled = ({ date }) => isAfter(date, maxDate);
  const tileClassName = ({ date }) =>
    next7Days.some((day) => format(day, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")) ? "next-7-days" : null;

  return (
    <div className="flex flex-col my-8">
      <div className=" w-[95%] flex gap-6 justify-center">
        <div className="flex flex-col">
          <div className="flex">
            {showTimeSelection ? (
              <div className="ml-4">
                <p>2/ Choose Time:</p>
                {allTimes.length > 0 ? (
                  <TimeSelection
                    allTimes={allTimes}
                    activeTime={activeTime}
                    onClick={handleTimeRowClick}
                    onCancel={() => setShowTimeSelection(false)}
                    onNext={handleBooking}
                  />
                ) : (
                  <div>No available slots for this date</div>
                )}
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
                    tileClassName={tileClassName}
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

