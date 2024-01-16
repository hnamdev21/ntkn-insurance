import cn from "classnames";
import React from "react";

import { Text } from "@/components/Typography";

import styles from "./styles.module.scss";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: boolean;
} & Text;

const TextareaComponent = (
  {
    error = false,
    className = "",
    fontSize = "fs-normal",
    fontWeight = "fw-normal",
    textColor = "txtClr-dark",
    italic = false,
    underline = false,
    textAlign = "left",
    textTransform,
    ...props
  }: TextareaProps,
  ref?: React.Ref<HTMLTextAreaElement>
) => {
  const classes = cn(
    styles.textarea,
    error ? styles.error : "",
    styles[fontSize],
    styles[fontWeight],
    styles[textColor],
    styles[textAlign],
    italic ? styles.italic : "",
    underline ? styles.underline : "",
    textTransform ? styles[textTransform] : "",
    className
  );

  return <textarea className={classes} {...props} ref={ref}></textarea>;
};

const Textarea = React.forwardRef(TextareaComponent);

export default Textarea;
