"use client";

import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

// components
import { Viewport } from "./carousel-viewport";
import { NextButton, PrevButton } from "./carousel-buttons";

// types
import { CarouselContextType } from "./carousel.types";

const CarouselContext = createContext<CarouselContextType | null>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel components must be used within Carousel");
  }
  return context;
};

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  options?: EmblaOptionsType;
}

function Carousel({
  children,
  className = "",
  options = { loop: false, dragFree: true },
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const memoContextValue = useMemo(
    () => ({
      emblaRef,
      emblaApi,

      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    }),
    [canScrollNext, canScrollPrev, emblaApi, emblaRef, scrollNext, scrollPrev]
  );

  return (
    <CarouselContext.Provider value={memoContextValue}>
      <div className={className}>{children}</div>
    </CarouselContext.Provider>
  );
}

export const CarouselComponent = Object.assign(Carousel, {
  Viewport,
  PrevButton,
  NextButton,
});
