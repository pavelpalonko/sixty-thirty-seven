import { format } from "date-fns";

// context
import { useDatepickerContext } from "../composer/datepicker-composer";

export function TimeSwiper() {
  const { state, actions } = useDatepickerContext();

  if (!state.selectedDay) {
    return <div>select date</div>;
  }

  return (
    <div>
      {state.selectedDay.times.map((slot) => (
        <button key={slot.time} onClick={() => actions.setSelectedTime(slot)}>
          {format(slot.time, "h:mm a")}
        </button>
      ))}
    </div>
  );
}
