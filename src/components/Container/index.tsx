import cn from "classnames";
import React from "react";

import styles from "./styles.module.scss";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function Container({ children, className = "", ...props }: ContainerProps) {
  const classes = cn("mx-auto", styles.container, className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Container;
