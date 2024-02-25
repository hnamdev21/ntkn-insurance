"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

import { get, post } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Select from "@/components/Form/Select";
import Modal from "@/components/Modal";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { Policy } from "@/constants/data";
import { createContractFormValidator, CreateContractFormValues } from "@/constants/formValidator";
import { paymentMethodOptions } from "@/constants/other";

import styles from "./styles.module.scss";

type Props = {
  slug: string;
};

const PolicyModule = ({ slug }: Props) => {
  const [policy, setPolicy] = React.useState<Policy | null>(null);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

  // prettier-ignore
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(createContractFormValidator),
    mode: "onBlur",
  });

  const onSubmit = async (data: CreateContractFormValues) => {
    try {
      const response = await post("/contracts", data);

      if (response.success) {
        //
      }
    } catch (error) {
      //
    } finally {
      //
    }
  };

  const fetchPolicy = async () => {
    try {
      const response = await get<Policy>(`/policies?slug=${slug}`);

      if (response.success) {
        setPolicy(response.data);
        setValue("policyId", response.data.id);
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

          <ul className="w-full flex flex-col gap-[.4rem] mb-[2.4rem]">
            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Dwelling Coverage:
                </Typography>{" "}
                Protect the structure of your home, including walls, roof, floors, and built-in
                appliances. Our home insurance provides flexible dwelling coverage based on the
                replacement cost of your home.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Personal Property Coverage:
                </Typography>{" "}
                Safeguard your belongings, such as furniture, clothing, and electronics, with our
                personal property coverage. The insurance amount is tailored to the estimated value
                of your personal items.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Liability Coverage:
                </Typography>{" "}
                Our home insurance includes liability coverage, protecting you if someone is injured
                on your property or if you accidentally damage someone else&apos;s property.
                Coverage amounts are determined based on your policy.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Additional Living Expenses:
                </Typography>{" "}
                Be prepared for the unexpected. Our home insurance covers additional living
                expenses, helping with the cost of temporary living arrangements if you can&apos;t
                stay in your home due to a covered peril.
              </Typography>
            </li>

            <li>
              <Typography tag="p">
                <Typography tag="span" fontWeight="fw-bold">
                  Earthquake and Flood Coverage:
                </Typography>{" "}
                Customize your coverage to include protection against earthquake and flood damage.
                The insurance amount is determined by the specific risks in your region.
              </Typography>
            </li>
          </ul>

          <Typography tag="h4" fontWeight="fw-md">
            Protect Your Home: Partner with NTKN for reliable home insurance. Contact us today for a
            free consultation and choose the home insurance plan that best suits your needs. Thank
            you for choosing NTKN - Your trusted partner in securing your home and belongings.
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
        <Modal onClose={() => setIsOpenModal(false)}>
          <div className="relative z-50 lg:w-1/3 bg-white rounded-2xl">
            <div className="p-8">
              <Typography tag="h3" fontSize="fs-xl" fontWeight="fw-bold" className="mb-[2.4rem]">
                {policy?.title}
              </Typography>

              <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Input type="hidden" id="policyId" {...register("policyId")} />

                <Form.Item className="flex gap-[1.6rem]">
                  <div className="flex-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      {...register("email")}
                      error={errors.email && true}
                    />
                    {errors.email && <MessageError>{errors.email.message}</MessageError>}
                  </div>

                  <div className="flex-1">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      type="text"
                      id="phone"
                      {...register("phone")}
                      error={errors.phone && true}
                    />
                    {errors.phone && <MessageError>{errors.phone.message}</MessageError>}
                  </div>
                </Form.Item>

                <Form.Item className="flex gap-[1.6rem]">
                  <div className="flex-1">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      type="text"
                      id="address"
                      {...register("address")}
                      error={errors.address && true}
                    />
                    {errors.address && <MessageError>{errors.address.message}</MessageError>}
                  </div>

                  <div className="w-1/3">
                    <Label htmlFor="paymentMethod">Payment Method</Label>
                    <Select
                      id="paymentMethod"
                      {...register("paymentMethod")}
                      options={paymentMethodOptions}
                    />
                  </div>
                </Form.Item>

                <div className="flex items-center gap-[1.6rem] justify-end">
                  <Typography tag="p" fontWeight="fw-bold" fontSize="fs-lg">
                    {policy?.feeAmount} $
                  </Typography>
                  <Button className="w-full" type="submit">
                    Buy
                  </Button>
                </div>
              </Form>
            </div>
          </div>

          <button
            onClick={() => setIsOpenModal(false)}
            className="absolute top-0 right-1 text-4xl p-1 hover:opacity-40 ease-in-out transition-all"
          >
            &times;
          </button>
        </Modal>
      )}
    </>
  );
};

export default PolicyModule;
