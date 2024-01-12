import Image from "next/image";
import Link from "next/link";
import React from "react";

import { path } from "@/constants/route";

type CardProps = React.HTMLAttributes<HTMLDivElement>;
type CardHeaderProps = React.HTMLAttributes<HTMLAnchorElement> & {
  slug: string;
  imgSrc: string;
  imgAlt: string;
};
type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, ...props }: CardProps) => {
  return <div {...props}>{children}</div>;
};

Card.Header = function CardHeader({ slug, imgSrc, imgAlt, ...props }: CardHeaderProps) {
  return (
    <Link href={`${path.Shop}/${slug}`} {...props}>
      <Image src={imgSrc} alt={imgAlt} width={200} height={200} />
    </Link>
  );
};

Card.Body = function CardBody({ children, ...props }: CardBodyProps) {
  return <div {...props}>{children}</div>;
};

export default Card;
