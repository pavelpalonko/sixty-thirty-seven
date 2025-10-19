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
        <div className={styles["datepicker-content-wrapper"]}>
          <div className={styles["datepicker-container"]}>
            <DatepickerComposer.Title />
          </div>

          <DatepickerComposer.DaySwiper />

          <DatepickerComposer.TimeSwiper />
        </div>

        <div className={styles["datepicker-container"]}>
          <DatepickerComposer.Action />
        </div>
      </div>
    </DatepickerComposer.Provider>
  );
}
