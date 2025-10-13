import { parseISO, getTime } from "date-fns";

/**
 * Creates a timestamp from ISO 8601 date string.
 *
 * @param isoString Date string in ISO 8601 format ("YYYY-MM-DDTHH:mm:ss.sssZ")
 * @returns Unix timestamp in milliseconds
 */
export function createTimestamp(isoString: string): number {
  return getTime(parseISO(isoString));
}
