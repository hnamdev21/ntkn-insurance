"use client";

import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Sidebar, { StatusItem } from "@/components/Sidebar";

import { components, items } from "./data";
import styles from "./styles.module.scss";

const ProfileModule = () => {
  const [activeItem, setActiveItem] = React.useState<StatusItem>(items[0]);

  return (
    <Section>
      <Container className="flex items-start gap-[8.4rem]">
        <Sidebar
          as="list"
          items={items}
          className="w-1/5"
          onChange={(item) => setActiveItem(item as unknown as StatusItem)}
          currentItem={activeItem}
        />
        <div className={`flex-1 ${styles.mainSection}`}>{components[activeItem.value]}</div>
      </Container>
    </Section>
  );
};

export default ProfileModule;
