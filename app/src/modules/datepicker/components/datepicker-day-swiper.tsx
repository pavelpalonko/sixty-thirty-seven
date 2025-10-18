import { format, getDate } from "date-fns";

// context
import { useDatepickerContext } from "../composer/datepicker-composer";
import { CarouselComponent } from "@/modules/carousel/carousel-component";

// styles
import styles from "./datepicker-componets.module.css";

export function DaySwiper() {
  const { state, actions } = useDatepickerContext();

  return (
    <div>
      <CarouselComponent>
        <div className={styles["days-swiper-layout"]}>
          <div className={styles["arrow-wrapper"]}>
            <CarouselComponent.PrevButton />
          </div>

          <CarouselComponent.Viewport>
            {state.slots.map((day, index) => (
              <div
                key={day.date}
                className={styles["day-element-wrapper"]}
                onClick={() => actions.setSelectedDay(day)}
              >
                {/* only for first elemet of mounth */}
                {(index === 0 || getDate(day.date) === 1) && (
                  <div className={styles["month-name"]}>
                    {format(day.date, "MMM")}
                  </div>
                )}
                <div>{format(day.date, "EE")}</div>

                <div>{format(day.date, "dd")}</div>
              </div>
            ))}
          </CarouselComponent.Viewport>

          <div className={styles["arrow-wrapper"]}>
            <CarouselComponent.NextButton />
          </div>
        </div>
      </CarouselComponent>
    </div>
  );
}
