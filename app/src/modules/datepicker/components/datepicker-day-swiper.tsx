import { useDatepickerContext } from "../composer/datepicker-composer";

export function DaySwiper() {
  const { state, actions } = useDatepickerContext();

  return (
    <div>
      {state.daySlots.map((month) => (
        <div key={`${month.month}-${month.year}`}>
          <h3>
            {month.month} {month.year}
          </h3>

          <div className="days-grid">
            {month.days.map((day) => (
              <button
                key={day.date}
                onClick={() => actions.setSelectedDate(day.date)}
                className={day.isToday ? "today" : ""}
                data-selected={state.selectedDate === day.date}
              >
                <span>{day.dayName}</span>
                <span>{day.dayNumber}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
