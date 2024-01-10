import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";

const BentoSection = () => {
  return (
    <Section>
      <Container className="flex flex-col md:gap-[1.8rem]">
        <div className="md:h-[44rem] w-full border border-1 border-slate-950 rounded-3xl"></div>

        <div className="flex gap-[1.8rem] md:h-[44rem] w-full">
          <div className="border border-1 border-slate-950 md:rounded-3xl md:w-2/3"></div>
          <div className="border border-1 border-slate-950 md:rounded-3xl md:w-1/3"></div>
        </div>

        <div className="flex gap-[1.8rem] md:h-[44rem] w-full">
          <div className="border border-1 border-slate-950 md:rounded-3xl md:w-1/3"></div>
          <div className="border border-1 border-slate-950 md:rounded-3xl md:w-2/3"></div>
        </div>
      </Container>
    </Section>
  );
};

export default BentoSection;
