import { format, getDate } from "date-fns";

// context
import { useDatepickerContext } from "../composer/datepicker-composer";
import { CarouselComponent } from "@/modules/carousel/carousel-component";

export function DaySwiper() {
  const { state, actions } = useDatepickerContext();

  return (
    <div>
      <CarouselComponent>
        <div
          style={{
            display: "flex",
            width: "300px",
            gap: "15px",
            padding: "20px",
          }}
        >
          <CarouselComponent.PrevButton />

          <CarouselComponent.Viewport>
            {state.slots.map((day, index) => (
              <div
                key={day.date}
                style={{
                  backgroundColor: "gold",
                  width: "40px",
                  height: "60px",
                  display: "flex",
                  alignItems: "end",
                }}
                onClick={() => actions.setSelectedDay(day)}
              >
                <div style={{ position: "relative" }}>
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
              </div>
            ))}
          </CarouselComponent.Viewport>

          <CarouselComponent.NextButton />
        </div>
      </CarouselComponent>
    </div>
  );
}
