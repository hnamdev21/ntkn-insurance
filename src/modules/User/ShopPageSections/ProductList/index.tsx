import React from "react";

type ProductListProps = React.HTMLAttributes<HTMLDivElement>;

const ProductList = ({ ...props }: ProductListProps) => {
  return <div {...props}>ProductList</div>;
};

export default ProductList;
