"use client";

// hooks
import { useCommonDatepicker } from "./use-common-datepicker";

// components
import { DatepickerComposer } from "./composer/datepicker-composer";

// styles
import styles from "./datepicker.module.css";

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
      <div className={styles["datepicker-layout"]}>
        <DatepickerComposer.DaySwiper />

        <DatepickerComposer.TimeSwiper />

        <DatepickerComposer.Action />
      </div>
    </DatepickerComposer.Provider>
  );
}
