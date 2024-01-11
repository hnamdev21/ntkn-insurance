"use client";

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
  items: NavItem[];
  showIcon?: boolean;
  underlineAnimation?: boolean;
};

function Nav({
  items,
  color,
  showIcon = false,
  underlineAnimation = false,
  className = "",
  ...props
}: NavProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex gap-2 ${styles.nav} ${className}`} {...props}>
      {items.map((item) => {
        const active = pathname.includes(item.path);

        return (
          <li key={item.label} className={`${styles.item}`}>
            <Button
              as="a"
              href={item.path}
              btnVariant={active ? "primary" : "plain"}
              btnWidth="full"
              className={`flex items-center gap-[1.2rem] font-bold ${styles.link}`}
              underlineAnimation={underlineAnimation}
              color={color}
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
