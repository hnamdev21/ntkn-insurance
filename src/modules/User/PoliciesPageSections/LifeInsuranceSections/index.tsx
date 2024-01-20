import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

import { lifeInsuranceData } from "./data";
import styles from "./styles.module.scss";

const LifeInsuranceModule = () => {
  return (
    <>
      <Section>
        <Container className="px-[42rem]">
          <Typography tag="h3" fontSize="fs-md" fontWeight="fw-bold" className="mb-[2.4rem]">
            Welcome to NTKN, where we take pride in offering you the most unique and comprehensive
            life insurance solutions. Life insurance is not just a product; it&apos;s assurance,
            peace of mind, and genuine care from us to our valued customers.
          </Typography>

          <Typography tag="h4" fontWeight="fw-bold" className="mb-[1.2rem]">
            Why Choose Our Life Insurance:
          </Typography>

          <ul className="w-full flex flex-col gap-[.4rem] mb-[2.4rem]">
            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Comprehensive Protection:
                </Typography>{" "}
                We provide flexible life insurance packages tailored to fit every individual and
                need. From basic coverage to comprehensive care packages, we commit to safeguarding
                you and your family against unforeseen risks.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Healthcare Support:
                </Typography>{" "}
                In addition to life insurance, we also offer health insurance options, ensuring you
                have peace of mind regarding treatment costs and maintaining everyday health.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Supportive Benefits:
                </Typography>{" "}
                We are committed to assisting your family during the toughest times. Supportive
                benefits include immediate payouts and other assistance to ensure financial concerns
                are eased during loss.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Dedicated Customer Care Team:
                </Typography>{" "}
                Our customer care team is always ready to listen and address all your queries. We
                prioritize your reputation and satisfaction.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Special Offers:
                </Typography>{" "}
                Purchasing life insurance from NTKN comes with special discounts and attractive
                offers, allowing you to save costs and receive more value.
              </Typography>
            </li>
          </ul>

          <Typography tag="h4" fontWeight="fw-md">
            Get Started Here: Don&apos;t let tomorrow bring worries about unforeseen risks. Partner
            with NTKN to protect your future and your loved ones. Contact us today for free
            consultation and choose the life insurance plan that suits you best. Thank you for
            trusting and choosing NTKN - Your reliable companion on the journey to secure safety and
            prosperity.
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
            Life Insurance Claim Details
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
              {lifeInsuranceData.map((item) => (
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

export default LifeInsuranceModule;
