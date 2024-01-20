import React from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

import { medicalInsuranceData } from "./data";
import styles from "./styles.module.scss";

const MedicalInsuranceModule = () => {
  return (
    <>
      <Section>
        <Container className="px-[42rem]">
          <Typography tag="h3" fontSize="fs-md" fontWeight="fw-bold" className="mb-[2.4rem]">
            Welcome to NTKN, where we are committed to offering you exceptional health insurance
            solutions. Medical insurance is not just a policy; it&apos;s your safety net, ensuring
            you have access to quality healthcare without financial stress. At NTKN, we prioritize
            your well-being and peace of mind.
          </Typography>

          <Typography tag="h4" fontWeight="fw-bold" className="mb-[1.2rem]">
            Why Choose Our Medical Insurance:
          </Typography>

          <ul className="w-full flex flex-col gap-[.4rem] mb-[2.4rem]">
            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Comprehensive Medical Coverage:
                </Typography>{" "}
                Our health insurance plans offer comprehensive coverage for medical expenses,
                including hospitalization, surgeries, and other healthcare services. We tailor our
                plans to meet your specific health needs.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Prescription Drug Coverage:
                </Typography>{" "}
                Access to affordable prescription medications is crucial. Our health insurance
                includes prescription drug coverage to help alleviate the cost burden of necessary
                medications.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Mental Health Support:
                </Typography>{" "}
                Your mental health is equally important. Our health insurance provides coverage for
                mental health services, including therapy and counseling, ensuring you have the
                support you need.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Preventive Care Benefits:
                </Typography>{" "}
                We believe in proactive healthcare. Our health insurance plans include coverage for
                preventive care, encouraging a healthy lifestyle and early detection of potential
                health issues.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Dedicated Customer Support:
                </Typography>{" "}
                Our customer support team is here to assist you with any health insurance-related
                queries or concerns. Your health and satisfaction are our top priorities.
              </Typography>
            </li>
          </ul>

          <Typography tag="h4" fontWeight="fw-md">
            Prioritize Your Health: Choose NTKN as your health insurance partner. Contact us today
            for a free consultation and select the health insurance plan that aligns with your
            well-being goals. Thank you for entrusting NTKN - Your reliable companion on the path to
            a healthy and secure future.
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
            Medical Insurance Claim Details
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
              {medicalInsuranceData.map((item) => (
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

export default MedicalInsuranceModule;
