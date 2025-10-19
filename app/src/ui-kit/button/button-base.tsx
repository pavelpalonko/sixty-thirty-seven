import React from "react";
import classNames from "classnames";

// types
import type { BaseButtonPropsType } from "./button.types";

// styles
import styles from "./button.module.css";

/**
 * BaseButton – is a base button component, that is used to create different types of buttons
 * it incapsulates common logic for all button types.
 * It can be used only as a base for new button, but not in markup
 *
 * @returns {React.ReactNode} – button component
 */
export function BaseButton({
  customClasses,
  disabled,
  wide = false,
  size = "large",
  type = "button",
  onClick,
  children,
  ...buttonProps
}: BaseButtonPropsType) {
  // TODO: can be extended with custom loading processing logic
  const isDisabled = disabled;

  const buttonClasses = classNames(
    styles["base-button"],
    styles[size],
    {
      [styles.wide]: wide,
    },
    customClasses
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={buttonClasses}
      {...buttonProps}
    >
      <div className={styles["children-wrapper"]}>{children}</div>
    </button>
  );
}
