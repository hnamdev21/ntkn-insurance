"use client";

import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

import Sidebar, { StatusItem } from "./Sidebar";

const items: StatusItem[] = [
  {
    label: "Contract services",
    value: "contract-services",
  },
  {
    label: "Insurance fee",
    value: "insurance-fee",
  },
  {
    label: "Health care benefits",
    value: "health-care-benefits",
  },
  {
    label: "Other",
    value: "other",
  },
];

const FAQsModule = () => {
  const [activeItem, setActiveItem] = React.useState<StatusItem>(items[0]);

  return (
    <>
      <Section style={{ backgroundColor: "var(--color-primary)" }}>
        <Container>
          {/* HEADER */}
          <div>
            <Typography
              tag="h2"
              fontWeight="fw-md"
              fontSize="fs-4xl"
              textColor="txtClr-white"
              textAlign="center"
            >
              Frequently Asked Questions
            </Typography>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="flex gap-[2.4rem]">
          <Sidebar
            as="list"
            items={items}
            className="w-1/5"
            onChange={(item) => setActiveItem(item as unknown as StatusItem)}
            currentItem={activeItem}
          />
          <div className="flex-1"></div>
        </Container>
      </Section>
    </>
  );
};

export default FAQsModule;
