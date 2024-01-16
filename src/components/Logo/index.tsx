import cn from "classnames";
import Link from "next/link";
import React from "react";

import { path } from "@/constants/route";

import { LogoIcon } from "../Icons";
import Typography from "../Typography";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  hasText?: boolean;
}

function Logo({ hasText = false, className = "", ...props }: LogoProps) {
  const classes = cn("inline-block", className);

  return (
    <div className={classes} {...props}>
      <Link href={path.Home} className="flex gap-[.8rem] items-center">
        <LogoIcon />

        {hasText && (
          <Typography className="ml-2" fontSize="fs-3xl">
            NTKN
          </Typography>
        )}
      </Link>
    </div>
  );
}

export default Logo;
