import React from "react";

// hooks
import { useCarousel } from "./carousel-component";

// styles
import styles from "./carousel-component.module.css";

type ViewportProps = {
  className?: string;
  children: React.ReactNode[];
};

export function Viewport({ children, className = "" }: ViewportProps) {
  const { emblaRef } = useCarousel();

  return (
    <div className={styles["carousel-layout"]} ref={emblaRef}>
      <div className={`${styles["embla__container"]} ${className}`}>
        {children.map((slide, index) => (
          <div key={index} className={styles["embla__slide"]}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
