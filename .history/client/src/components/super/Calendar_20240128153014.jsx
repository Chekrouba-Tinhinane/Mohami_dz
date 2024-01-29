const handleTimeRowClick = (selectedTime) => {
  // Find the availability interval corresponding to the selected time
  const selectedInterval = availabilityIntervals.find((interval) => {
    const intervalStartTime = new Date(`${interval.DateInterval}T${interval.HeureDebut}`);
    const intervalEndTime = new Date(`${interval.DateInterval}T${interval.HeureFin}`);
    return (
      selectedTime >= intervalStartTime &&
      selectedTime < intervalEndTime
    );
  });

  // If the corresponding interval is found, set it as the activeTime
  if (selectedInterval) {
    setActiveTime(selectedInterval);
  } else {
    console.error("No availability interval found for the selected time.");
  }
};
