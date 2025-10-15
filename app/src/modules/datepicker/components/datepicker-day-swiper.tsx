import { format, getDate } from "date-fns";

// context
import { useDatepickerContext } from "../composer/datepicker-composer";

export function DaySwiper() {
  const { state, actions } = useDatepickerContext();

  return (
    <div style={{ display: "flex", gap: "20px", paddingTop: "30px" }}>
      {state.slots.map((day, index) => (
        <div
          key={day.date}
          style={{ position: "relative" }}
          onClick={() => actions.setSelectedDay(day)}
        >
          {/* only for first elemet of mounth */}
          {(index === 0 || getDate(day.date) === 1) && (
            <div
              style={{
                top: "-12px",
                fontSize: "12px",
                position: "absolute",
                backgroundColor: "gray",
              }}
            >
              {format(day.date, "MMM")}
            </div>
          )}

          <div>{format(day.date, "EE")}</div>

          <div>{format(day.date, "dd")}</div>
        </div>
      ))}
    </div>
  );
}
