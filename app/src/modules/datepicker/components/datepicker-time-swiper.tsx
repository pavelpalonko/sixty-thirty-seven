import { format } from "date-fns";

// context
import { useDatepickerContext } from "../composer/datepicker-composer";
import { CarouselComponent } from "@/modules/carousel/carousel-component";

export function TimeSwiper() {
  const { state, actions } = useDatepickerContext();

  if (!state.selectedDay) {
    return <div>select date</div>;
  }

  return (
    <div>
      <CarouselComponent>
        <div style={{ display: "flex", width: "300px", gap: "15px" }}>
          <CarouselComponent.PrevButton />

          <CarouselComponent.Viewport>
            {state.selectedDay.times.map((slot) => (
              <button
                key={slot.time}
                style={{ width: "64px" }}
                onClick={() => actions.setSelectedTime(slot)}
              >
                {format(slot.time, "h:mm a")}
              </button>
            ))}
          </CarouselComponent.Viewport>

          <CarouselComponent.NextButton />
        </div>
      </CarouselComponent>
    </div>
  );
}
