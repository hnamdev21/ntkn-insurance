import Image from "next/image";
import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

const CTASection = () => {
  return (
    <Section style={{ backgroundColor: "var(--color-black)" }}>
      <Container className="flex md:gap-[4.8rem]">
        <div className="w-2/5">
          <Image src="/images/cta-section.png" alt="Banner" width={1980} height={1020} priority />
        </div>

        <div className="flex flex-col justify-center flex-1 pr-[32rem]">
          <Typography
            tag="h2"
            className="mb-4"
            fontWeight="fw-md"
            fontSize="fs-xl"
            textColor="txtClr-white"
          >
            Lorem ipsum dolor sit amet.
          </Typography>

          <Typography textColor="txtClr-light" fontWeight="fw-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna
            mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam
            porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </Typography>
        </div>
      </Container>
    </Section>
  );
};

export default CTASection;
