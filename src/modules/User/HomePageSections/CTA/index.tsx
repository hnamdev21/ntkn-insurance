import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

const CTASection = () => {
  return (
    <Section style={{ backgroundColor: "var(--color-primary)" }}>
      <Container className="flex md:gap-[4.8rem]">
        <div className="flex flex-col justify-center flex-1">
          <Typography
            tag="h2"
            className="mb-4"
            fontWeight="fw-md"
            fontSize="fs-4xl"
            textColor="txtClr-white"
            textAlign="center"
          >
            All your needs in one place
          </Typography>
        </div>
      </Container>
    </Section>
  );
};

export default CTASection;
