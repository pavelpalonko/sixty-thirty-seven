import { setHours, setMinutes } from "date-fns";

/**
 * Combines "YYYY-MM-DD" date + "HH:mm" time into ISO
 */
export function generateIsoDate(dateStr: string, time: string): string {
  const date = new Date(dateStr);
  const [hours, minutes] = time.split(":").map(Number);

  return setMinutes(setHours(date, hours), minutes).toISOString();
}
