import { useDatepickerContext } from "../composer/datepicker-composer";

export function TimeSwiper() {
  const { state, actions } = useDatepickerContext();

  if (!state.selectedDate) {
    return <div>select date</div>;
  }

  return (
    <div>
      {state.timeSlots.map((slot) => (
        <button
          key={slot.value}
          onClick={() => actions.setSelectedTime(slot.value)}
          data-selected={state.selectedTime === slot.value}
        >
          {slot.label}
        </button>
      ))}
    </div>
  );
}
