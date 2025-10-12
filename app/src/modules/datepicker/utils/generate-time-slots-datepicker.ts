import {
  format,
  isToday,
  setHours,
  setMinutes,
  addMinutes,
  isAfter,
} from "date-fns";

// consts
import { DEFAULT_TIME_INTERVAL_MINUTES } from "../datepicker.consts";

// types
import { TimeSlot } from "../datepicker.types";

type Args = {
  selectedDate: Date | null;
  intervalMinutes?: number;
};

/**
 * Generates time slots for 12-hour format.
 * @param intervalMinutes Interval between times in minutes (default = 15)
 * @param selectedDate Selected date to generate times for
 */
export function generateTimeSlotsDatepicker({
  selectedDate,
  intervalMinutes = DEFAULT_TIME_INTERVAL_MINUTES,
}: Args): TimeSlot[] {
  if (!selectedDate) return [];

  const now = new Date();
  const times: TimeSlot[] = [];
  const isSelectedToday = isToday(selectedDate);

  let current = setMinutes(setHours(selectedDate, 0), 0);
  const endOfDay = setMinutes(setHours(selectedDate, 23), 59);

  while (isAfter(endOfDay, current)) {
    // skip past times if selected date is today
    if (isSelectedToday && !isAfter(current, now)) {
      current = addMinutes(current, intervalMinutes);
      continue;
    }

    times.push({
      label: format(current, "h:mm a"),
      value: format(current, "HH:mm"),
      dateTime: current.toISOString(), // ISO 8601 format
    });

    current = addMinutes(current, intervalMinutes);
  }

  return times;
}
