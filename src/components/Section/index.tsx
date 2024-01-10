import cn from "classnames";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section = ({ children, className = "", ...props }: SectionProps) => {
  const classes = cn("h-screen pt-[12.2rem] pb-[2rem]", className);

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};

export default Section;
