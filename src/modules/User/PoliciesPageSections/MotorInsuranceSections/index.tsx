import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

import { motorInsuranceData } from "./data";
import styles from "./styles.module.scss";

const MotorInsuranceModule = () => {
  return (
    <>
      <Section>
        <Container className="px-[42rem]">
          <Typography tag="h3" fontSize="fs-md" fontWeight="fw-bold" className="mb-[2.4rem]">
            Welcome to NTKN, where we are dedicated to providing you with exceptional and
            comprehensive auto insurance solutions. Motor insurance is not just a policy; it&apos;s
            a shield, ensuring you drive with confidence and security knowing that you are protected
            by NTKN.
          </Typography>

          <Typography tag="h4" fontWeight="fw-bold" className="mb-[1.2rem]">
            Why Choose Our Motor Insurance:
          </Typography>

          <ul className="w-full flex flex-col gap-[.4rem] mb-[2.4rem]">
            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Comprehensive Coverage:
                </Typography>{" "}
                Our auto insurance plans are designed to offer comprehensive coverage tailored to
                your specific needs. Whether you&apos;re looking for basic liability coverage or
                full protection, we&apos;ve got you covered.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Accident and Damage Protection:
                </Typography>{" "}
                We provide support for repairs and damages resulting from accidents, collisions, or
                unforeseen incidents. Our goal is to get you back on the road quickly and smoothly.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  24/7 Roadside Assistance:
                </Typography>{" "}
                With NTKN, help is just a call away. Our 24/7 roadside assistance ensures you
                receive prompt support for breakdowns, flat tires, and other emergencies.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Personalized Service:
                </Typography>{" "}
                Our dedicated team is committed to providing personalized service. We understand
                that every driver is unique, and we strive to tailor our services to meet your
                individual requirements.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Discounts and Special Offers:
                </Typography>{" "}
                Choosing auto insurance from NTKN means gaining access to exclusive discounts and
                special offers. We aim to make quality coverage more affordable for you.
              </Typography>
            </li>
          </ul>

          <Typography tag="h4" fontWeight="fw-md">
            Get on the Road Safely: Drive with confidence and peace of mind by partnering with NTKN
            for your auto insurance needs. Contact us today for a free consultation and select the
            auto insurance plan that suits your driving lifestyle. Thank you for choosing NTKN -
            Your trusted companion on the road to safety and security.
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container>
          <Typography
            tag="h3"
            fontSize="fs-xl"
            fontWeight="fw-bold"
            textAlign="center"
            className="mb-[2.4rem]"
          >
            Motor Insurance Claim Details
          </Typography>

          <table className="w-full mb-[2.4rem]">
            <thead>
              <tr className={`flex w-full py-[0.6rem] ${styles.heading}`}>
                <th className="w-1/4 px-[1rem]">
                  <Typography tag="h5" fontWeight="fw-md">
                    Coverage
                  </Typography>
                </th>

                <th className="w-1/6 px-[1rem]">
                  <Typography tag="h5" fontWeight="fw-md">
                    Insurance Amount
                  </Typography>
                </th>

                <th className="flex-1 px-[1rem]">
                  <Typography tag="h5" fontWeight="fw-md">
                    Details
                  </Typography>
                </th>
              </tr>
            </thead>

            <tbody>
              {motorInsuranceData.map((item) => (
                <tr className={`flex w-full py-[0.6rem] ${styles.row}`} key={item.id}>
                  <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                    <Typography tag="p" fontWeight="fw-md">
                      {item.coverage}
                    </Typography>
                  </td>

                  <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                    <Typography tag="p" fontWeight="fw-md">
                      {item.insuranceAmount}
                    </Typography>
                  </td>

                  <td className={`flex-1 px-[1rem] ${styles.col}`}>
                    <Typography tag="p" fontWeight="fw-md">
                      {item.details}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </Section>
    </>
  );
};

export default MotorInsuranceModule;
