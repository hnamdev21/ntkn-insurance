import cn from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

export type StatusItem = {
  label: string;
  value: string;
} & { as?: "list" };

export type NavItem = {
  label: string;
  href: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
} & { as: "nav" };

type StatusSidebar = {
  as?: "list";
  items: StatusItem[];
  defaultItem?: StatusItem;
  currentItem?: StatusItem;
  onChange: (item: StatusItem) => void;
};

type NavSidebar = {
  as: "nav";
  items: NavItem[];
  defaultItem?: NavItem;
};

type SidebarProps = React.HTMLAttributes<HTMLDivElement> & (StatusSidebar | NavSidebar);

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const defaultItem = props.defaultItem ?? props.items[0];

  const classes = cn(styles.sidebar, className);

  return (
    <div className={classes} {...props}>
      {props.as === "list" && (
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
      )}

      {props.as === "nav" && (
        <ul>
          {props.items.map((item) => (
            <li
              key={item.href}
              className={cn(
                styles.item,
                item.href === (defaultItem as NavItem)?.href ? styles.active : ""
              )}
            >
              <Link href={item.href}>
                {item.icon && <div className={styles.icon}>{item.icon({})}</div>}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
