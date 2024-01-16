import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

import Card from "./Card";

const WhyUsSection = () => {
  return (
    <Section style={{ backgroundColor: "var(--color-primary)" }}>
      <Container className="flex md:gap-[4.8rem]">
        <div className="flex flex-col justify-center flex-1">
          <Typography
            tag="h2"
            fontWeight="fw-md"
            fontSize="fs-4xl"
            textColor="txtClr-white"
            textAlign="center"
            className="mb-[4.2rem]"
          >
            Why choose us?
          </Typography>
        </div>
      </Container>
      <Container className="px-[8rem] flex flex-col gap-[2.4rem]">
        <div className="flex gap-[2.4rem]">
          <Card title="Experience and Reputation">
            With over 20 years of experience in the social insurance industry, we have provided care
            and financial protection services to millions of people. Our reputation is built on
            professionalism, instilling trust, and providing peace of mind to our customers.
          </Card>
          <Card title="Diverse Plans and Benefits">
            We understand that each individual has unique needs and aspirations for social
            insurance. Therefore, we offer a range of flexible plans and benefits, from life
            insurance to health insurance and auto insurance. You can choose policies that align
            with your lifestyle and budget.
          </Card>
          <Card title="Convenience and Easy Payments">
            With an advanced online platform, you can easily view and manage your policies anytime,
            anywhere. We provide simple and secure online payment tools, helping you efficiently
            manage your finances. Online loan facilities and payment options are also integrated,
            ensuring a convenient experience.
          </Card>
        </div>
        <div className="flex gap-[2.4rem]">
          <Card title="Customer-Centric Approach">
            Our commitment to a customer-centric approach sets us apart. We prioritize understanding
            your unique needs and concerns. Our dedicated customer support team is ready to assist
            you, ensuring that you receive personalized attention and quick solutions to any queries
            or issues.
          </Card>
          <Card title="Financial Stability and Trust">
            Choose us for the assurance of financial stability and trust. As a financially robust
            company, we are dedicated to safeguarding your investments. Our transparent financial
            practices and a solid track record underscore our commitment to providing a secure and
            reliable partner for your insurance needs.
          </Card>
          <Card title="Innovative Technology for Security">
            Embrace the future with our innovative technology solutions. We leverage cutting-edge
            security measures to protect your data and transactions. Our commitment to staying ahead
            in technology ensures that you benefit from the latest advancements, providing a secure
            and seamless experience in managing your insurance affairs online.
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default WhyUsSection;
