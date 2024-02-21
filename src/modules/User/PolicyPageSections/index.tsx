"use client";

import React from "react";

import { get } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Modal from "@/components/Modal";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { Policy } from "@/constants/data";

import styles from "./styles.module.scss";

type Props = {
  slug: string;
};

const PolicyModule = ({ slug }: Props) => {
  const [policy, setPolicy] = React.useState<Policy | null>(null);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  const fetchPolicy = async () => {
    try {
      const response = await get<Policy>(`/policies?slug=${slug}`);

      if (response.success) {
        setPolicy(response.data);
      }
    } catch (error) {
      //
    } finally {
      //
    }
  };

  React.useEffect(() => {
    fetchPolicy();
  }, [slug]);

  return (
    <>
      <Section>
        <Container className="px-[42rem]">
          <Typography tag="h3" fontSize="fs-md" fontWeight="fw-bold" className="mb-[2.4rem]">
            Welcome to NTKN, where we take pride in offering you comprehensive home insurance
            solutions. Home insurance is more than just a policy; it&apos;s your safeguard against
            unexpected events that could impact your home. At NTKN, we understand the importance of
            your home and are dedicated to providing you with peace of mind and protection.
          </Typography>

          <Typography tag="h4" fontWeight="fw-bold" className="mb-[1.2rem]">
            Why Choose Our Home Insurance:
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="inline-block w-auto mx-auto">
            <Button onClick={() => setIsOpenModal(!isOpenModal)}>Buy Now</Button>
          </div>

          <Typography
            tag="h3"
            fontSize="fs-xl"
            fontWeight="fw-bold"
            textAlign="center"
            className="mb-[2.4rem]"
          >
            Home Insurance Claim Details
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
              {policy?.claimDetails.map((item) => (
                <tr className={`flex w-full py-[0.6rem] ${styles.row}`} key={item.id}>
                  <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                    <Typography tag="p" fontWeight="fw-md">
                      {item.coverage}
                    </Typography>
                  </td>

                  <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                    <Typography tag="p" fontWeight="fw-md">
                      {item.insuranceAmount} $
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

      {isOpenModal && (
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
          Ok
        </Modal>
      )}
    </>
  );
};

export default PolicyModule;
