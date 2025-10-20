import { useCallback, useMemo, useState } from "react";
import { parseISO } from "date-fns";

// utils
import { generateTimeSlots } from "./utils/generate-slots";

// types
import { DaySlot, TimeSlot } from "./datepicker.types";

export function useCommonDatepicker() {
  const [selectedDay, setSelectedDay] = useState<DaySlot | null>(null);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);

  const slots = useMemo(() => generateTimeSlots({}), []);

  const confirm = useCallback(() => {
    if (selectedTime) {
      const now = Date.now();
      const timestamp = parseISO(selectedTime.time).getTime();

      if (timestamp < now) {
        console.warn("⛔ You can`t choose time in the past!");

        return;
      }

      console.log({ timestamp });
    }
  }, [selectedTime]);

  return {
    slots,
    confirm,

    selectedDay,
    selectedTime,
    setSelectedDay,
    setSelectedTime,
  };
}
