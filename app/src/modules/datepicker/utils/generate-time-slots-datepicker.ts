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

/**
 * Generates time slots, filtering past times if referenceDate is today
 * @param referenceDate - Can be Date object or "YYYY-MM-DD" string
 */
export function generateTimeSlotsDatepicker(
  referenceDate: Date | string | null = null,
  intervalMinutes: number = DEFAULT_TIME_INTERVAL_MINUTES
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const now = new Date();

  // Parse reference date
  const refDate = referenceDate ? new Date(referenceDate) : null;
  const isRefToday = refDate && isToday(refDate);

  let current = setMinutes(setHours(new Date(), 0), 0);
  const endOfDay = setMinutes(setHours(new Date(), 23), 59);

  while (isAfter(endOfDay, current)) {
    // skip past times if selected date is today
    if (isRefToday && !isAfter(current, now)) {
      current = addMinutes(current, intervalMinutes);
      continue;
    }

    slots.push({
      value: format(current, "HH:mm"),
      label: format(current, "h:mm a"),
    });

    current = addMinutes(current, intervalMinutes);
  }

  return slots;
}
