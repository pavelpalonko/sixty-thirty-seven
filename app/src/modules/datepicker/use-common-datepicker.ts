import { useCallback, useMemo, useState } from "react";
import { parseISO } from "date-fns";

// utils
import { generateIsoDate } from "./utils/generate-iso-date-datepicker";
import { generateDaySlotsDatepicker } from "./utils/generate-day-slots-datepicker";
import { generateTimeSlotsDatepicker } from "./utils/generate-time-slots-datepicker";

export function useCommonDatepicker() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const daySlots = useMemo(() => generateDaySlotsDatepicker(), []);

  const timeSlots = useMemo(() => {
    if (!selectedDate) return [];

    return generateTimeSlotsDatepicker(selectedDate);
  }, [selectedDate]);

  const isoString = useMemo(() => {
    if (!selectedDate || !selectedTime) return null;

    return generateIsoDate(selectedDate, selectedTime);
  }, [selectedDate, selectedTime]);

  const confirm = useCallback(() => {
    if (isoString) console.log(parseISO(isoString).getTime());
  }, [isoString]);

  return {
    isoString,

    daySlots,
    timeSlots,

    confirm,

    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
  };
}
