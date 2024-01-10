import cn from "classnames";
import React from "react";

import { Text } from "@/components/Typography";

import styles from "./styles.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: "text" | "checkbox" | "radio" | "password" | "email" | "submit";
  sizeElement?: "sm" | "normal" | "md" | "lg";
  width?: "full" | "auto" | "max-content";
  error?: boolean;
} & Text;

function InputComponent(
  {
    type = "text",
    sizeElement = "normal",
    width = "full",
    error = false,
    children,
    className = "",
    fontSize = "fs-normal",
    fontWeight = "fw-normal",
    textColor = "txtClr-dark",
    italic = false,
    underline = false,
    textAlign = "left",
    textTransform,
    ...props
  }: InputProps,
  ref?: React.Ref<HTMLInputElement>
) {
  const classes = cn(
    styles.input,
    type === "checkbox" ? styles.checkbox : "",
    type === "radio" ? styles.radio : "",
    type !== "checkbox" && type !== "radio" ? styles.text : "",
    error ? styles.error : "",
    styles[sizeElement],
    styles[width],
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
    <input type={type} {...props} className={classes} ref={ref}>
      {children}
    </input>
  );
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(InputComponent);

export default Input;
