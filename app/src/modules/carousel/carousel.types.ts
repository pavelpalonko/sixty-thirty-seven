import { EmblaCarouselType } from "embla-carousel";
import { EmblaViewportRefType } from "embla-carousel-react";

export type CarouselContextType = {
  emblaRef: EmblaViewportRefType;
  emblaApi: EmblaCarouselType | undefined;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
};
