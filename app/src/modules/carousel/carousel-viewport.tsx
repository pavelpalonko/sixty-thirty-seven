import React from "react";

// hooks
import { useCarousel } from "./carousel-component";

// styles
import styles from "./carousel-component.module.css";
import classNames from "classnames";

type ViewportProps = {
  className?: string;
  elemetsPerViewport?: number;
  children: React.ReactNode[];
};

export function Viewport({
  children,
  className = "",
  elemetsPerViewport,
}: ViewportProps) {
  const { emblaRef } = useCarousel();

  return (
    <div
      className={styles["carousel-layout"]}
      ref={emblaRef}
      style={
        {
          "--elemets-count": elemetsPerViewport,
        } as React.CSSProperties
      }
    >
      <div className={`${styles["embla__container"]} ${className}`}>
        {children.map((slide, index) => (
          <div
            key={index}
            className={classNames({
              [styles["embla__slide"]]: elemetsPerViewport,
            })}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
