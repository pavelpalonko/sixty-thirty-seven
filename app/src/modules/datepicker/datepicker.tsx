"use client";

// hooks
import { useCommonDatepicker } from "./use-common-datepicker";

// components
import { DatepickerComposer } from "./composer/datepicker-composer";

export function Datepicker() {
  const {
    isoString,

    daySlots,
    timeSlots,

    confirm,

    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
  } = useCommonDatepicker();

  return (
    <DatepickerComposer.Provider
      value={{
        state: { daySlots, timeSlots, selectedDate, selectedTime },
        actions: { setSelectedDate, setSelectedTime, confirm },
      }}
    >
      <DatepickerComposer.DaySwiper />
      <DatepickerComposer.TimeSwiper />

      <DatepickerComposer.Action />
    </DatepickerComposer.Provider>
  );
}
