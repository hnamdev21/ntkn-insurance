import React from "react";

import Typography from "@/components/Typography";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: any;
  title: string;
};

const Card = ({ title, children, ...props }: CardProps) => {
  return (
    <div
      className="p-[2.2rem] rounded-2xl overflow-hidden bg-white flex-1"
      style={{ filter: "drop-shadow(rgba(24, 48, 40, 0.2) 0px 0px 8px)" }}
      {...props}
    >
      <Typography
        tag="h3"
        fontWeight="fw-bold"
        fontSize="fs-md"
        textColor="txtClr-dark"
        className="mb-[2rem]"
      >
        {title}
      </Typography>
      <Typography tag="p" className="mb-4" textColor="txtClr-dark">
        {children}
      </Typography>
    </div>
  );
};

export default Card;
