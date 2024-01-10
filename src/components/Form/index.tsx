"use client";

import cn from "classnames";
import React from "react";

import styles from "./styles.module.scss";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (data: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

function Form({ onSubmit, children, className = "", ...props }: FormProps) {
  return (
    <form onSubmit={onSubmit} {...props} className={cn(styles.form, className)}>
      {children}
    </form>
  );
}

Form.Item = function FormItem({
  children,
  className = "",
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("mb-[2.2rem]", className)} {...props}>
      {children}
    </div>
  );
};

export default Form;
