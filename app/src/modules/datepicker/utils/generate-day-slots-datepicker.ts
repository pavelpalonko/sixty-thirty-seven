import { addDays, format, isToday, startOfDay } from "date-fns";

// consts
import {
  FORMAT_MONTH,
  FORMAT_DAY_NAME,
  FORMAT_DAY_NUMBER,
  DEFAULT_TOTAL_DAYS,
} from "../datepicker.consts";

// types
import { DatepickerDay, DatepickerMonth } from "../datepicker.types";

// TODO: skip today if you don't have time
/**
 * Generates day slots grouped by month, starting from startDate
 */
export function generateDaySlotsDatepicker(
  startDate: Date = new Date(),
  totalDays: number = DEFAULT_TOTAL_DAYS
): DatepickerMonth[] {
  const start = startOfDay(startDate);
  const monthsMap = new Map<string, DatepickerMonth>();

  for (let i = 0; i < totalDays; i++) {
    const date = addDays(start, i);
    const year = date.getFullYear();
    const month = format(date, FORMAT_MONTH);
    const monthKey = `${month}-${year}`;

    const day: DatepickerDay = {
      date: format(date, "yyyy-MM-dd"),
      isToday: isToday(date),
      dayNumber: date.getDate(),
      dayName: format(date, FORMAT_DAY_NAME),
    };

    let monthGroup = monthsMap.get(monthKey);
    if (!monthGroup) {
      monthGroup = { month, year, days: [] };
      monthsMap.set(monthKey, monthGroup);
    }

    monthGroup.days.push(day);
  }

  return Array.from(monthsMap.values());
}
