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
      // TODO: prevent past date
      console.log(parseISO(selectedTime.time).getTime(), "timestamp");
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
