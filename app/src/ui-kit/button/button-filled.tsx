import React from "react";
import classNames from "classnames";

// components
import { BaseButton } from "./button-base";

// types
import type { ButtonFilledPropsType } from "./button.types";

// styles
import styles from "./button.module.css";

export function ButtonFilled({
  appearance = "accent",
  children,
  ...baseButtonProps
}: ButtonFilledPropsType) {
  const customClasses = classNames(styles["button-filled"], styles[appearance]);

  return (
    <BaseButton customClasses={customClasses} {...baseButtonProps}>
      {children}
    </BaseButton>
  );
}
