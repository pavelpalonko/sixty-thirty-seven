import React, { JSX } from "react";
import classNames from "classnames";

import styles from "./txt.module.css";

type Props = {
  tagName?: keyof Pick<JSX.IntrinsicElements, "p" | "span" | "div">;
  color?: "default" | "description" | "light" | "inherit";

  size?: "small" | "medium" | "large";
  weight?: "light" | "semiBold" | "bold";
  keepWord?: boolean;
  textEllipsis?: boolean;
  lineClamp?: number;

  title?: string;
  children: React.ReactNode;
};

export function Txt({
  tagName = "p",
  color = "default",
  keepWord = false,
  children,
  size = "large",
  textEllipsis,
  lineClamp = 1,
  weight = "light",
  title,
}: Props) {
  const classes = classNames({
    // text type
    [styles["content-text-small"]]: size === "small",
    [styles["content-text-medium"]]: size === "medium",
    [styles["content-text-large"]]: size === "large",

    // font weight
    [styles.light]: weight === "light",
    [styles["semi-bold"]]: weight === "semiBold",
    [styles.bold]: weight === "bold",

    // colors
    [styles["color-light"]]: color === "light",
    [styles["color-default"]]: color === "default",
    [styles["color-description"]]: color === "description",

    // word-break
    [styles["keep-word"]]: keepWord,

    // other
    [styles["text-ellipsis"]]: textEllipsis,
  });

  const createdElement = React.createElement(
    tagName,
    {
      className: classes,
      style: { WebkitLineClamp: textEllipsis ? lineClamp : undefined },
      title:
        textEllipsis && typeof children === "string" && !title
          ? children
          : title,
    },
    children
  );

  return createdElement;
}
