// hooks
import { useCarousel } from "./carousel-component";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export function PrevButton({ children, className = "" }: ButtonProps) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={className}
      aria-label="Previous slide"
    >
      {children || "<"}
    </button>
  );
}

export function NextButton({ children, className = "" }: ButtonProps) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={className}
      aria-label="Next slide"
    >
      {children || ">"}
    </button>
  );
}
