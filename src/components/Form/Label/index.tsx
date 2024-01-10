import cn from "classnames";
import React from "react";

import { Text } from "@/components/Typography";

import styles from "./styles.module.scss";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
  required?: boolean;
} & Text;

function Label({
  htmlFor,
  children,
  fontSize = "fs-sm",
  fontWeight = "fw-normal",
  textColor = "txtClr-dark",
  italic = false,
  underline = false,
  textAlign = "left",
  textTransform,
  className = "",
  ...props
}: LabelProps) {
  const classes = cn(
    "block mb-[.8rem]",
    styles.label,
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
    <label htmlFor={htmlFor} {...props} className={classes}>
      {children}

      {props.required && <span className="text-red-500 ml-[.4rem]">*</span>}
    </label>
  );
}

export default Label;
