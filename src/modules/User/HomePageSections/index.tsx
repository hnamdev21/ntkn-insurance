import React from "react";

import BentoSection from "./Bento";
import CTASection from "./CTA";
import HeroSection from "./Hero";
import WhyUsSection from "./WhyUs";

const HomeModule = () => {
  return (
    <>
      <HeroSection />
      <CTASection />
      <BentoSection />
      <WhyUsSection />
    </>
  );
};

export default HomeModule;
