"use client";

// hooks
import { useCommonDatepicker } from "./use-common-datepicker";

// components
import { DatepickerComposer } from "./composer/datepicker-composer";

export function Datepicker() {
  const {
    slots,
    confirm,

    selectedDay,
    selectedTime,
    setSelectedDay,
    setSelectedTime,
  } = useCommonDatepicker();

  return (
    <DatepickerComposer.Provider
      value={{
        state: { slots, selectedDay, selectedTime },
        actions: { setSelectedDay, setSelectedTime, confirm },
      }}
    >
      <DatepickerComposer.DaySwiper />
      <DatepickerComposer.TimeSwiper />

      <DatepickerComposer.Action />
    </DatepickerComposer.Provider>
  );
}
