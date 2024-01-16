"use client";

import cn from "classnames";
import { usePathname } from "next/navigation";
import React from "react";

import Button from "../Button";
import styles from "./styles.module.scss";

type NavItem = {
  label: string;
  path: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  disabled?: boolean; // TODO: Implement this
};

type NavProps = React.HTMLAttributes<HTMLDivElement> & {
  col?: boolean;
  items: NavItem[];
  showIcon?: boolean;
};

function Nav({ col = false, items, showIcon = false, className = "", ...props }: NavProps) {
  const pathname = usePathname();
  const classes = cn("flex gap-[1.8rem]", styles.nav, className, col && "flex-col gap-[0.0rem]");

  return (
    <nav className={classes} {...props}>
      {items.map((item) => {
        const active = pathname.includes(item.path);

        return (
          <li key={item.label} className={cn(col && "max-w-max")}>
            <Button
              as="a"
              href={item.path}
              btnVariant={active ? "tertiary" : "plain"}
              btnWidth={col ? "auto" : "full"}
              className={cn("flex items-center gap-[1.2rem] font-bold", styles.link)}
              underlineAnimation
              textColor={active ? "txtClr-primary" : "txtClr-secondary"}
            >
              {showIcon && item.icon && <item.icon className={active ? "fill-white" : ""} />}
              {item.label}
            </Button>
          </li>
        );
      })}
    </nav>
  );
}

export default Nav;
