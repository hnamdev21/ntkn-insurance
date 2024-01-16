import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

import ContactForm from "./ContactForm";

const ContactModule = () => {
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
              Contact us
            </Typography>
            <Typography tag="p" fontSize="fs-sm" textColor="txtClr-white" textAlign="center">
              Customer care and respect are always the top values we keep in mind. That&apos;s why
              we always try to resolve your questions and listen to your feedback.
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Company information */}
      <Section>
        <Container className="md:px-[42rem]">
          <div>
            <Typography
              tag="h3"
              className="mb-[2rem]"
              fontWeight="fw-md"
              fontSize="fs-md"
              textColor="txtClr-dark"
            >
              Contact information
            </Typography>

            {/* Phone number information */}
            <div className="flex flex-col gap-[3rem]">
              <div className="flex-1 flex">
                <Typography tag="p" textColor="txtClr-dark" className="mb-[0.8rem] w-1/3">
                  Phone number
                </Typography>
                <div className="flex flex-col gap-[.8rem]">
                  <Typography tag="p" textColor="txtClr-dark" className="flex-1">
                    Hanoi: +84 123 456 789
                  </Typography>
                  <Typography tag="p" textColor="txtClr-dark" className="flex-1">
                    Ho Chi Minh: +84 123 456 789
                  </Typography>
                </div>
              </div>

              {/* Address information */}
              <div className="flex-1 flex">
                <Typography tag="p" textColor="txtClr-dark" className="mb-[0.8rem] w-1/3">
                  Address
                </Typography>
                <div className="flex flex-col gap-[.8rem]">
                  <Typography tag="p" textColor="txtClr-dark" className="flex-1">
                    Hanoi: 123 Nguyen Trai, Thanh Xuan
                  </Typography>
                  <Typography tag="p" textColor="txtClr-dark" className="flex-1">
                    Ho Chi Minh: 123 Nguyen Trai, Thanh Xuan
                  </Typography>
                </div>
              </div>

              {/* Work time */}
              <div className="flex-1 flex">
                <Typography tag="p" textColor="txtClr-dark" className="mb-[0.8rem] w-1/3">
                  Work time
                </Typography>
                <div className="flex flex-col gap-[.8rem]">
                  <Typography tag="p" textColor="txtClr-dark" className="flex-1">
                    Monday - Friday
                  </Typography>
                  <Typography tag="p" textColor="txtClr-dark" className="flex-1">
                    Hanoi: 8:00 - 17:00
                  </Typography>
                  <Typography tag="p" textColor="txtClr-dark" className="flex-1">
                    Ho Chi Minh: 8:00 - 17:00
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Send us a message */}
      <Section>
        <Container className="md:px-[55rem]">
          <Typography
            tag="h3"
            className="mb-[2rem]"
            fontWeight="fw-md"
            fontSize="fs-2xl"
            textColor="txtClr-dark"
            textAlign="center"
          >
            You need some help? Send us
          </Typography>

          <ContactForm />
        </Container>
      </Section>
    </>
  );
};

export default ContactModule;
