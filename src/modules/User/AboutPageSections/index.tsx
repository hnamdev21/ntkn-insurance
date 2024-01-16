import Image from "next/image";
import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

import styles from "./styles.module.scss";

const AboutModule = () => {
  return (
    <>
      <Section style={{ backgroundColor: "var(--color-primary)" }}>
        <Container>
          {/* HEADER */}
          <div>
            <Typography
              tag="h2"
              className="mb-[2.4rem]"
              fontWeight="fw-md"
              fontSize="fs-4xl"
              textColor="txtClr-white"
              textAlign="center"
            >
              Vision and Mission
            </Typography>
            <Typography tag="p" fontSize="fs-sm" textColor="txtClr-white" textAlign="center">
              Expertise in the Region, Global Capabilities
            </Typography>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="md:px-[42rem]">
          <Typography tag="h3" className="mb-[2rem]" textColor="txtClr-dark">
            Over the past century, NTKN has consistently built a reputation as a corporation
            synonymous with justice, integrity, and global reliability. The group&apos;s reputation
            and credibility have been further solidified through a commitment to providing the
            highest quality, globally recognized services for customers, with a mindset always
            geared towards bringing the best to all its clients.
          </Typography>

          <div className={styles.banner}>
            <Image
              src="/images/people-scrum.jpg"
              alt="Banner"
              width={1980}
              height={1020}
              priority
            />
          </div>

          <Typography tag="p" className="mt-[2rem]" textColor="txtClr-dark">
            Inheriting these values, NTKN establishes standards of fairness and integrity as core
            values, a fundamental foundation, and a guiding compass in all its business activities.
            We recognize that every future success stems from these values, and that is why NTKN is
            committed to maintaining ethical standards, integrity, and reliability in all its
            operations. Simultaneously, we continue to pursue a strategy that encourages individuals
            to achieve financial freedom.
          </Typography>
          <Typography tag="p" className="mt-[2rem]" textColor="txtClr-dark">
            Originating from the mission to protect the best for humanity, we now have the
            opportunity to elevate our role and focus to new heights. Not only reaching beyond
            existing stability, we also inspire and honor the positive outcomes that stability
            brings, to perceive and seize every opportunity that life offers, whether big or small
            dreams, for journeys and even destinations. Because the singular and most significant
            concern of NTKN is to help customers enjoy life with peace of mind and pursue their
            dreams with freedom.
          </Typography>
        </Container>
      </Section>
    </>
  );
};

export default AboutModule;
