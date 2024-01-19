import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

import styles from "./styles.module.scss";

const LifeInsuranceModule = () => {
  return (
    <>
      <Section></Section>

      <Section>
        <Container className="px-[42rem]">
          <Typography tag="h3" fontSize="fs-md" fontWeight="fw-bold" className="mb-[2.4rem]">
            Welcome to [Company Name], where we take pride in offering you the most unique and
            comprehensive life insurance solutions. Life insurance is not just a product; it&apos;s
            assurance, peace of mind, and genuine care from us to our valued customers.
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
                </Typography>
                Purchasing life insurance from [Company Name] comes with special discounts and
                attractive offers, allowing you to save costs and receive more value.
              </Typography>
            </li>
          </ul>

          <Typography tag="h4" fontWeight="fw-md">
            Get Started Here: Don&apos;t let tomorrow bring worries about unforeseen risks. Partner
            with [Company Name] to protect your future and your loved ones. Contact us today for
            free consultation and choose the life insurance plan that suits you best. Thank you for
            trusting and choosing [Company Name] - Your reliable companion on the journey to secure
            safety and prosperity.
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
                    Content
                  </Typography>
                </th>

                <th className="w-1/6 px-[1rem]">
                  <Typography tag="h5" fontWeight="fw-md">
                    Insurance Amount
                  </Typography>
                </th>

                <th className="flex-1 px-[1rem]">
                  <Typography tag="h5" fontWeight="fw-md">
                    Cases
                  </Typography>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className={`flex w-full py-[0.6rem] ${styles.row}`}>
                <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Total and Permanent Disability Insurance
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    20.000 USD
                  </Typography>
                </td>

                <td className={`flex-1 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    In case of disability, the beneficiary may receive a portion of the disability
                    insurance, such as 50% or 75%, depending on the determined level of disability
                    by the insurance.
                  </Typography>
                </td>
              </tr>
              <tr className={`flex w-full py-[0.6rem] ${styles.row}`}>
                <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Death Insurance
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    50.000 USD
                  </Typography>
                </td>

                <td className={`flex-1 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Our Death Insurance provides financial support to your loved ones in the
                    unfortunate event of your demise. It covers various expenses related to the
                    funeral, outstanding debts, and ensures your family&apos;s financial stability
                    during challenging times.
                  </Typography>
                </td>
              </tr>

              <tr className={`flex w-full py-[0.6rem] ${styles.row}`}>
                <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Funeral Insurance
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    10.000 USD
                  </Typography>
                </td>

                <td className={`flex-1 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Our Funeral Insurance ensures that your final expenses, including burial or
                    cremation costs, are covered, relieving your family from financial burdens
                    during a difficult time.
                  </Typography>
                </td>
              </tr>

              <tr className={`flex w-full py-[0.6rem] ${styles.row}`}>
                <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Critical Illness Insurance
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    20.000 USD
                  </Typography>
                </td>

                <td className={`flex-1 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Critical Illness Insurance provides a lump-sum payment upon diagnosis of a
                    covered critical illness. This financial support allows you to focus on your
                    recovery without worrying about medical expenses.
                  </Typography>
                </td>
              </tr>

              <tr className={`flex w-full py-[0.6rem] ${styles.row}`}>
                <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Health Insurance
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    10.000 USD
                  </Typography>
                </td>

                <td className={`flex-1 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Our Health Insurance provides coverage for medical expenses, ensuring you
                    receive the best healthcare without financial stress. It covers hospitalization,
                    surgeries, and other healthcare services.
                  </Typography>
                </td>
              </tr>

              <tr className={`flex w-full py-[0.6rem] ${styles.row}`}>
                <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Cash Value Accumulation
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Variable
                  </Typography>
                </td>

                <td className={`flex-1 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    With our life insurance, a portion of your premium contributes to the cash value
                    accumulation. Over time, you can access this cash value, providing a financial
                    cushion for future needs, such as education expenses or retirement.
                  </Typography>
                </td>
              </tr>

              <tr className={`flex w-full py-[0.6rem] ${styles.row}`}>
                <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Accelerated Death Benefit
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Included
                  </Typography>
                </td>

                <td className={`flex-1 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    Our life insurance includes an Accelerated Death Benefit, allowing you to access
                    a portion of your death benefit in the case of a terminal illness diagnosis.
                    This benefit helps cover medical expenses and ensures financial peace of mind
                    during difficult times.
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Section>
    </>
  );
};

export default LifeInsuranceModule;
