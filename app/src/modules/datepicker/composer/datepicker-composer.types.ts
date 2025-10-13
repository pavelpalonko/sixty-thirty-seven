import { DatepickerMonth, TimeSlot } from "../datepicker.types";

export type DatepickerComposerState = {
  daySlots: DatepickerMonth[];
  timeSlots: TimeSlot[];
  selectedDate: string | null;
  selectedTime: string | null;
};

export interface DatepickerComposerActions {
  confirm: () => void;
  setSelectedDate: (date: string | null) => void;
  setSelectedTime: (time: string | null) => void;
}

export type DatepickerComposerContext = {
  state: DatepickerComposerState;
  actions: DatepickerComposerActions;
};
