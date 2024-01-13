import Image from "next/image";
import Link from "next/link";
import React from "react";

import Typography, { Text } from "../Typography";

type CardProps = React.HTMLAttributes<HTMLDivElement>;
type CardHeaderProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  imgSrc: string;
  imgAlt: string;
};
type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;
type CardTitleProps = React.HTMLAttributes<HTMLDivElement> & Text;
type CardDescriptionProps = React.HTMLAttributes<HTMLDivElement> & Text;
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, ...props }: CardProps) => {
  return (
    <div className="w-full md:h-[62rem] overflow-hidden rounded-2xl" {...props}>
      {children}
    </div>
  );
};

Card.Header = function CardHeader({ href, imgSrc, imgAlt, ...props }: CardHeaderProps) {
  return (
    <Link href={href} className="block w-full h-auto aspect-square" {...props}>
      <Image src={imgSrc} alt={imgAlt} width={1920} height={1080} />
    </Link>
  );
};

Card.Body = function CardBody({ children, ...props }: CardBodyProps) {
  return <div {...props}>{children}</div>;
};

Card.Title = function CardTitle({ children, ...props }: CardTitleProps) {
  return (
    <Typography tag="h4" fontSize="fs-md" textAlign="center" className="py-[.8rem]" {...props}>
      {children}
    </Typography>
  );
};

Card.Description = function CardDescription({ children, ...props }: CardDescriptionProps) {
  return (
    <Typography tag="p" fontSize="fs-sm" className="px-[1.2rem]" {...props}>
      {children}
    </Typography>
  );
};

Card.Footer = function CardFooter({ children, ...props }: CardFooterProps) {
  return (
    <div className="flex items-center justify-between w-full gap-[1.2rem] p-[1.2rem]" {...props}>
      {children}
    </div>
  );
};

export default Card;
