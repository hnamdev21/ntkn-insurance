import cn from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type FontSize = "fs-xs" | "fs-sm" | "fs-normal" | "fs-md" | "fs-lg" | "fs-xl" | "fs-2xl" | "fs-3xl" | "fs-4xl" | "fs-6xl" | "fs-10xl" | "fs-12xl"; /* prettier-ignore */
type FontWeight = "fw-thin" | "fw-normal" | "fw-md" | "fw-bold";
type TextColor = "txtClr-primary" | "txtClr-secondary" | "txtClr-danger" | "txtClr-success" | "txtClr-warning" | "txtClr-info" | "txtClr-light" | "txtClr-dark" | "txtClr-white"; /* prettier-ignore */
type TextTransform = "capitalize" | "uppercase" | "lowercase";
type TextAlign = "left" | "center" | "right" | "justify";
type Italic = boolean;
type Underline = boolean;

export type Text = {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  textColor?: TextColor;
  textTransform?: TextTransform;
  textAlign?: TextAlign;
  italic?: Italic;
  underline?: Underline;
};

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  tag?: Tag;
  children: React.ReactNode;
  className?: string;
} & Text;

function Typography({
  children,
  tag = "p",
  fontSize = "fs-normal",
  fontWeight = "fw-normal",
  textColor = "txtClr-dark",
  italic = false,
  underline = false,
  textAlign = "left",
  textTransform,
  className = "",
  ...props
}: TypographyProps) {
  const Component = tag;
  const classes = cn(
    styles.typography,
    styles[fontSize],
    styles[fontWeight],
    styles[textColor],
    styles[textAlign],
    italic ? styles.italic : "",
    underline ? styles.underline : "",
    textTransform ? styles[textTransform] : "",
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Typography;
