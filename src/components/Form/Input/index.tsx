import cn from "classnames";
import React from "react";

import { CloseEyeIcon, OpenEyeIcon } from "@/components/Icons";
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

  return <input type={type} {...props} className={classes} ref={ref} />;
}

InputComponent.Password = function InputPasswordComponent(
  {
    sizeElement = "normal",
    width = "full",
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
  }: InputProps,
  ref?: React.Ref<HTMLInputElement>
) {
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);

  const classes = cn(
    styles.input,
    styles.text,
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
    <div className={styles.fieldContainer}>
      <input {...props} type={isShowPassword ? "text" : "password"} className={classes} ref={ref} />
      <span
        className={`${styles.eyeIconContainer}`}
        onClick={() => setIsShowPassword(!isShowPassword)}
      >
        {isShowPassword ? <CloseEyeIcon /> : <OpenEyeIcon />}
      </span>
    </div>
  );
};

export const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(InputComponent.Password); /* prettier-ignore */
const Input = React.forwardRef<HTMLInputElement, InputProps>(InputComponent);

export default Input;
