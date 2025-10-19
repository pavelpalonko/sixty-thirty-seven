import { format, getDate } from "date-fns";

// context
import { Txt } from "@/ui-kit/txt/txt";
import { useDatepickerContext } from "../../composer/datepicker-composer";
import { CarouselComponent } from "@/modules/carousel/carousel-component";

// styles
import styles from "./datepicker-day-swiper.module.css";
import classNames from "classnames";

export function DaySwiper() {
  const { state, actions } = useDatepickerContext();

  return (
    <div>
      <CarouselComponent>
        <div className={styles["swiper-layout"]}>
          <CarouselComponent.Viewport
            className={styles["swiper-viewport-wrapper"]}
          >
            {state.slots.map((day, index) => (
              <button
                key={day.date}
                className={classNames(styles["swiper-element-wrapper"], {
                  [styles["element-selected"]]:
                    state.selectedDay?.date === day.date,
                })}
                onClick={() => actions.setSelectedDay(day)}
              >
                {(index === 0 || getDate(day.date) === 1) && (
                  <div className={styles["month-name"]}>
                    <Txt size="medium" color="description">
                      {format(day.date, "MMM")}
                    </Txt>
                  </div>
                )}
                <Txt color="inherit">{format(day.date, "EE")}</Txt>

                <Txt color="inherit">{format(day.date, "dd")}</Txt>
              </button>
            ))}
          </CarouselComponent.Viewport>

          <CarouselComponent.PrevButton
            className={styles["swiper-arrow-left"]}
            disabledClassName={styles["swiper-arrow-disabled"]}
          />
          <CarouselComponent.NextButton
            className={styles["swiper-arrow-right"]}
            disabledClassName={styles["swiper-arrow-disabled"]}
          />
        </div>
      </CarouselComponent>
    </div>
  );
}
