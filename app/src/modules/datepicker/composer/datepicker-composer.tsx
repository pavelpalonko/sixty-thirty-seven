import { createContext, use } from "react";

// components
import { DaySwiper } from "../components/datepicker-day-swiper/datepicker-day-swiper";
import { TimeSwiper } from "../components/datepicker-time-swiper/datepicker-time-swiper";

// types
import { DatepickerComposerContext } from "./datepicker-composer.types";
import { Action } from "../components/datepicker-action";

const DatepickerContext = createContext<DatepickerComposerContext | null>(null);

export function useDatepickerContext() {
  const context = use(DatepickerContext);

  if (!context) {
    throw new Error(
      "Datepicker components must be used within DatepickerComposer.Provider"
    );
  }

  return context;
}

interface ProviderProps {
  children: React.ReactNode;
  value: DatepickerComposerContext;
}

function Provider({ children, value }: ProviderProps) {
  return (
    <DatepickerContext.Provider value={value}>
      {children}
    </DatepickerContext.Provider>
  );
}

export const DatepickerComposer = {
  Action,
  Provider,
  DaySwiper,
  TimeSwiper,
};
