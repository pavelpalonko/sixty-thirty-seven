import {
  addDays,
  isAfter,
  setHours,
  setMinutes,
  addMinutes,
  startOfDay,
} from "date-fns";

// consts
import {
  DEFAULT_TOTAL_DAYS,
  DEFAULT_TIME_INTERVAL_MINUTES,
} from "../datepicker.consts";

// types
import { DaySlot, TimeSlot } from "../datepicker.types";

type Args = {
  startDate?: Date;
  totalDays?: number;
  intervalMinutes?: number;
};

/**
 * Method to generate slots for a date range
 *
 * @param startDate - Starting date (default: today)
 * @param totalDays - Number of days to generate (default: 42)
 * @param intervalMinutes - Interval between time slots in minutes (default: 15)
 *
 * @returns Array of time slots
 */
export function generateTimeSlots({
  startDate = new Date(),
  totalDays = DEFAULT_TOTAL_DAYS,
  intervalMinutes = DEFAULT_TIME_INTERVAL_MINUTES,
}: Args): DaySlot[] {
  const start = startOfDay(startDate);
  const slots: DaySlot[] = [];
  const now = new Date();

  for (let dayOffset = 0; dayOffset < totalDays; dayOffset++) {
    const currentDate = addDays(start, dayOffset);
    const dayStart = startOfDay(currentDate);

    // generate time slots for this day
    const times: TimeSlot[] = [];

    let currentTime = setMinutes(setHours(currentDate, 0), 0);
    const endOfDay = setMinutes(setHours(currentDate, 23), 59);

    while (isAfter(endOfDay, currentTime)) {
      // skip past times
      if (isAfter(currentTime, now)) {
        times.push({
          time: currentTime.toISOString(),
        });
      }

      currentTime = addMinutes(currentTime, intervalMinutes);
    }

    slots.push({
      date: dayStart.toISOString(),
      times,
    });
  }

  return slots;
}
