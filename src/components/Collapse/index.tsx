import cn from "classnames";
import React from "react";

import Typography from "../Typography";
import styles from "./styles.module.scss";

export type CollapseItem = {
  id: string;
  label: string;
  children: React.ReactNode;
};

type CollapseProps = React.HTMLAttributes<HTMLDivElement> & {
  items: CollapseItem[];
};

const Collapse = ({ items, ...props }: CollapseProps) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.collapse} {...props}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(styles.item, activeId === item.id && styles.active)}
          onClick={() => toggleAccordion(item.id)}
        >
          <Typography tag="h4" fontWeight="fw-bold" className="pb-[.6rem]">
            {item.label}
          </Typography>

          <div className={cn(styles.content, activeId === item.id && styles.active)}>
            {item.children}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;
