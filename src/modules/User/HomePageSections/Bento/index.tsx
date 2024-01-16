import Image from "next/image";
import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";

const BentoSection = () => {
  return (
    <Section>
      <Container className="flex flex-col md:gap-[1.8rem]">
        <div className="overflow-hidden md:h-[44rem] w-full  rounded-3xl">
          <Image src="/images/hero-section.webp" alt="Banner" width={1980} height={1020} priority />
        </div>

        <div className="overflow-hidden flex gap-[1.8rem] md:h-[44rem] w-full">
          <div className="overflow-hidden  md:rounded-3xl md:w-2/3">
            <Image
              src="/images/social-insurance/house.png"
              alt="Banner"
              width={1980}
              height={1020}
              priority
            />
          </div>
          <div className="overflow-hidden  md:rounded-3xl md:w-1/3">
            <Image
              src="/images/social-insurance/older-adult.jpg"
              alt="Banner"
              width={1980}
              height={1020}
              priority
            />
          </div>
        </div>

        <div className="overflow-hidden flex gap-[1.8rem] md:h-[44rem] w-full">
          <div className="overflow-hidden  md:rounded-3xl md:w-1/3">
            <Image
              src="/images/social-insurance/nurse.webp"
              alt="Banner"
              width={1980}
              height={1020}
              priority
            />
          </div>
          <div className="overflow-hidden  md:rounded-3xl md:w-2/3">
            <Image
              src="/images/social-insurance/car.webp"
              alt="Banner"
              width={1980}
              height={1020}
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BentoSection;
