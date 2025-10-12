// days types
export type DatepickerDay = {
  date: Date;
  numberDay: number;
  nameDay: string;
  isToday: boolean;
};

export type DatepickerMonth = {
  year: number;
  month: string;
  days: DatepickerDay[];
};

// minutes types
export type TimeSlot = {
  label: string; // e.g. "3:15 PM"
  value: string; // e.g. "15:15"
  dateTime: string;
};
