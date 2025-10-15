export type DaySlot = {
  date: string; // ISO
  times: TimeSlot[];
};

export type TimeSlot = {
  time: string; // ISO
};
