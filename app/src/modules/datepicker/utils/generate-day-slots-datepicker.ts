import { addDays, format, getYear, isToday, startOfDay } from "date-fns";

// consts
import {
  FORMAT_MONTH,
  FORMAT_DAY_NAME,
  FORMAT_DAY_NUMBER,
  DEFAULT_TOTAL_DAYS,
} from "../datepicker.consts";

// types
import { DatepickerDay, DatepickerMonth } from "../datepicker.types";

/**
 * Generates calendar days grouped by month and year.
 * @param totalDays Number of days to generate (default = 6 weeks)
 */
export function generateDaySlotsDatepicker(
  totalDays: number = DEFAULT_TOTAL_DAYS
): DatepickerMonth[] {
  const today = startOfDay(new Date());
  const monthsMap = new Map<string, DatepickerMonth>();

  for (let i = 0; i < totalDays; i++) {
    const date = addDays(today, i);
    const year = getYear(date);
    const month = format(date, FORMAT_MONTH);
    const monthKey = `${month}-${year}`;

    const day: DatepickerDay = {
      date,
      isToday: isToday(date),
      nameDay: format(date, FORMAT_DAY_NAME),
      numberDay: Number(format(date, FORMAT_DAY_NUMBER)),
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
