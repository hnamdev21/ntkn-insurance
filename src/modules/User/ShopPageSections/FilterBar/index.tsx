import cn from "classnames";
import React from "react";

import Label from "@/components/Form/Label";
import Select from "@/components/Form/Select";

import styles from "./styles.module.scss";

const MOCK_UP_SORT_OPTIONS = [
  { value: "price", label: "Price" },
  { value: "rating", label: "Rating" },
  { value: "popularity", label: "Popularity" },
];

type FilterBarProps = React.HTMLAttributes<HTMLDivElement>;

const FilterBar = ({ className, ...props }: FilterBarProps) => {
  const classes = cn(
    "fixed bottom-[12rem] left-1/2 -translate-x-1/2 px-[2.4rem] py-[1.2rem] rounded-full",
    styles.filterBar,
    className
  );

  return (
    <div className={classes} {...props}>
      <form className="flex gap-[2.4rem]">
        <div className="flex items-center gap-[1.2rem]">
          <Label htmlFor="sort" className="mb-[0.0rem]">
            Sort by
          </Label>
          <Select id="sort" name="sort" className="w-[12rem]" options={MOCK_UP_SORT_OPTIONS} />
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
