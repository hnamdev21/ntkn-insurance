"use client";

import React from "react";

import Collapse from "@/components/Collapse";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Sidebar, { StatusItem } from "@/components/Sidebar";
import Typography from "@/components/Typography";

import { collapseItems, items } from "./data";

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
        <Container className="flex items-start gap-[12.4rem]">
          <Sidebar
            as="list"
            items={items}
            className="w-1/6"
            onChange={(item) => setActiveItem(item as unknown as StatusItem)}
            currentItem={activeItem}
          />
          <div className="flex-1">
            {collapseItems[activeItem.value] && (
              <Collapse items={collapseItems[activeItem.value]} />
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default FAQsModule;
