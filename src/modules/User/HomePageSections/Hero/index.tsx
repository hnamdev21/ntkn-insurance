import cn from "classnames";
import Image from "next/image";
import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";

import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <Section>
      <Container>
        <h1 className={cn("md:pb-[1.2rem]", styles.title)}>Hero</h1>

        <div className={styles.banner}>
          <Image src="/images/hero-section.png" alt="Banner" width={1980} height={1020} priority />
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
