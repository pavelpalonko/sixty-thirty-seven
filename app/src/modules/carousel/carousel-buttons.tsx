import { ChevronLeft, ChevronRight } from "lucide-react";

// hooks
import { useCarousel } from "./carousel-component";
import classNames from "classnames";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  disabledClassName?: string;
};

export function PrevButton({
  children,
  className = "",
  disabledClassName = "",
}: ButtonProps) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={classNames(className, { [disabledClassName]: !canScrollPrev })}
      aria-label="Previous slide"
    >
      {children || <ChevronLeft width={24} height={24} strokeWidth={1} />}
    </button>
  );
}

export function NextButton({
  children,
  className = "",
  disabledClassName = "",
}: ButtonProps) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={classNames(className, { [disabledClassName]: !canScrollNext })}
      aria-label="Next slide"
    >
      {children || <ChevronRight width={24} height={24} strokeWidth={1} />}
    </button>
  );
}
