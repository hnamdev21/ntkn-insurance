"use client";

import cn from "classnames";
import Link from "next/link";
import React from "react";

import { Text } from "../Typography";
import styles from "./styles.module.scss";

export type ButtonVariant = "primary" | "secondary" | "icon" | "tertiary" | "danger" | "success" | "warning" | "plain"; /* prettier-ignore */
export type ButtonSize = "sm" | "normal" | "md" | "lg";
export type ButtonWidth = "full" | "auto";

type DefaultProps = {
  className?: string;
  btnSize?: ButtonSize;
  btnVariant?: ButtonVariant;
  btnWidth?: ButtonWidth;
  disabled?: boolean;
  underlineAnimation?: boolean;
} & Text;

/* prettier-ignore */
type ButtonProps = DefaultProps & React.HTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    isLoading?: boolean;
    children: React.ReactNode;
  };

/* prettier-ignore */
type LinkProps = DefaultProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
    children: React.ReactNode;
  };

type Props = ButtonProps | LinkProps;

function Button({
  btnSize = "normal",
  btnVariant = "primary",
  btnWidth = "auto",
  className = "",
  disabled = false,
  underlineAnimation = false,
  fontSize = "fs-normal",
  fontWeight = "fw-normal",
  textColor = "txtClr-dark",
  italic = false,
  underline = false,
  textAlign = "center",
  textTransform,
  children,
  ...props
}: Props) {
  const classes = cn(
    styles.button,
    styles[btnVariant],
    styles[btnSize],
    styles[btnWidth],
    disabled ? styles.disabled : "",
    underlineAnimation ? styles.underlineAnimation : "",
    // Text
    styles[fontSize],
    styles[fontWeight],
    styles[textColor],
    styles[textAlign],
    italic ? styles.italic : "",
    underline ? styles.underline : "",
    textTransform ? styles[textTransform] : "",
    className
  );

  if (props.as === "a") {
    return (
      <Link className={classes} href={props.href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props} disabled={disabled}>
      {props.isLoading ? (
        <span className="ml-[.8rem]">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
