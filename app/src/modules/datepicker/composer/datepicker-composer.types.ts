import { DaySlot, TimeSlot } from "../datepicker.types";

export type DatepickerComposerState = {
  slots: DaySlot[];
  selectedDay: DaySlot | null;
  selectedTime: TimeSlot | null;
};

export interface DatepickerComposerActions {
  confirm: () => void;
  setSelectedDay: (day: DaySlot | null) => void;
  setSelectedTime: (time: TimeSlot | null) => void;
}

export type DatepickerComposerContext = {
  state: DatepickerComposerState;
  actions: DatepickerComposerActions;
};
