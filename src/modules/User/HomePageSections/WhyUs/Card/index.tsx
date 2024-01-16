import React from "react";

import Typography from "@/components/Typography";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: any;
  title: string;
};

const Card = ({ title, children, ...props }: CardProps) => {
  return (
    <div className="p-[2.2rem] rounded-md overflow-hidden bg-white flex-1" {...props}>
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
