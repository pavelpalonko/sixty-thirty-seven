import { format } from "date-fns";

// context
import { Txt } from "@/ui-kit/txt/txt";
import { useDatepickerContext } from "../../composer/datepicker-composer";
import { CarouselComponent } from "@/modules/carousel/carousel-component";

// styles
import styles from "./datepicker-time-swiper.module.css";
import classNames from "classnames";

export function TimeSwiper() {
  const { state, actions } = useDatepickerContext();

  if (!state.selectedDay) {
    return (
      <div className={styles["fallback-elements"]}>
        <Txt color="description" size="medium">
          Please select a day
        </Txt>
      </div>
    );
  }

  return (
    <div>
      <CarouselComponent className={styles["swiper-layout"]}>
        <CarouselComponent.Viewport
          className={styles["swiper-viewport-wrapper"]}
        >
          {state.selectedDay.times.map((slot) => (
            <button
              key={slot.time}
              className={classNames(styles["swiper-element-wrapper"], {
                [styles["element-selected"]]:
                  state.selectedTime?.time === slot.time,
              })}
              onClick={() => actions.setSelectedTime(slot)}
            >
              <Txt color="inherit" size="medium">
                {format(slot.time, "h:mm a")}
              </Txt>
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
      </CarouselComponent>
    </div>
  );
}
