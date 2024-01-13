import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";

import FilterBar from "./FilterBar";
import ProductList from "./ProductList";

const ShopModule = () => {
  return (
    <Section>
      <Container>
        {/* TODO: Add bread */}
        <ProductList />
        <FilterBar />
      </Container>
    </Section>
  );
};

export default ShopModule;
