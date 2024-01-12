import { randomUUID } from "crypto";
import React from "react";

import Button from "@/components/Button";
import Card from "@/components/Card";
import { path } from "@/constants/route";

type ProductListProps = React.HTMLAttributes<HTMLDivElement>;

const MOCK_DATA = Array.from({ length: 8 }, (_, i) => i);

const ProductList = ({ ...props }: ProductListProps) => {
  return (
    <div {...props} className="grid md:grid-cols-4 md:gap-[2.4rem]">
      {MOCK_DATA.map((_, i) => (
        <Card key={randomUUID()}>
          <Card.Header
            href={`${path.Shop}/product-${i}`}
            imgSrc="/images/cta-section.png"
            imgAlt=""
          />

          <Card.Body>
            <Card.Title>Product {i}</Card.Title>
            <Card.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.
            </Card.Description>
          </Card.Body>

          <Card.Footer>
            <Button as="a" href="/check-out" className="flex-1">
              Buy now
            </Button>
            <Button btnVariant="secondary" className="flex-1">
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
