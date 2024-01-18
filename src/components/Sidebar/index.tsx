"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Props } from "../Icons";
import styles from "./styles.module.scss";

export type StatusItem = {
  label: string;
  value: string;
};

export type NavItem = {
  label: string;
  path: string;
  icon?: (props: Props) => React.JSX.Element;
};

type StatusSidebar = React.HTMLAttributes<HTMLDivElement> & {
  as?: "list";
  items: StatusItem[];
  defaultItem?: StatusItem;
  currentItem?: StatusItem;
  onChange: (item: StatusItem) => void;
};

type NavSidebar = React.HTMLAttributes<HTMLDivElement> & {
  as: "nav";
  items: NavItem[];
};

type SidebarProps = StatusSidebar | NavSidebar;

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const classes = cn(styles.sidebar, className);
  const pathname = usePathname();

  if (!props.items.length) return null;

  if (props.as === "nav") {
    return (
      <div className={classes}>
        <ul>
          {props.items.map((item) => (
            <li
              key={item.path}
              className={cn(styles.item, pathname.includes(item.path) ? styles.active : "")}
            >
              <Link href={item.path} className="flex items-center gap-[1.2rem]">
                {item.icon && <div className={styles.icon}>{item.icon({})}</div>}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const defaultItem = props.defaultItem ?? props.items[0];

  return (
    <div className={classes}>
      <ul>
        {props.items.map((item) => (
          <li
            key={item.value}
            className={cn(
              styles.item,
              item.value === (props.currentItem || (defaultItem as StatusItem)).value
                ? styles.active
                : ""
            )}
            onClick={() => props.onChange(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
