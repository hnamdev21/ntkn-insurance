"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { message, Spin } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { get, put } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Typography from "@/components/Typography";

import styles from "./styles.module.scss";

type Props = {
  slug: string;
};

const MIN_AGE = 16;
const MIN_CONTRACT_MONTH_TERM = 1;
const MIN_FEE_AMOUNT = 100;

const formValidator = yup.object().shape({
  id: yup.number().required("Please enter id"),
  title: yup.string().required("Please enter title"),
  insuredAge: yup
    .number()
    .required("Please enter insured age")
    .positive("Please enter a positive number")
    .integer("Please enter an integer")
    .min(MIN_AGE, "Please enter a number greater than " + MIN_AGE),
  contractMonthTerm: yup
    .number()
    .required("Please enter contract month term")
    .positive("Please enter a positive number")
    .integer("Please enter an integer")
    .min(MIN_CONTRACT_MONTH_TERM, "Please enter a number greater than " + MIN_CONTRACT_MONTH_TERM),
  feeAmount: yup
    .number()
    .required("Please enter fee amount")
    .positive("Please enter a positive number")
    .min(MIN_FEE_AMOUNT, "Please enter a number greater than " + MIN_FEE_AMOUNT),
});

const PolicyDetailModule = ({ slug }: Props) => {
  const [claims, setClaims] = React.useState<
    {
      id: number;
      coverage: string;
      insuranceAmount: number;
      details: string;
    }[]
  >([]);
  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors }, setValue } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  const onSubmit = async (data: {
    id: number;
    title: string;
    insuredAge: number;
    contractMonthTerm: number;
    feeAmount: number;
  }) => {
    try {
      const response = await put("/policies/" + data.id, data);

      if (response.success) {
        message.success("Policy updated successfully");
      }
    } catch (error) {
      //
    } finally {
      //
    }
  };

  const fetchPolicy = async () => {
    try {
      const response = await get<{
        id: number;
        title: string;
        insuredAge: number;
        contractMonthTerm: number;
        feeAmount: number;
        claimDetails: {
          id: number;
          coverage: string;
          insuranceAmount: number;
          details: string;
        }[];
      }>(`/policies?slug=${slug}`);

      if (response.success) {
        const { title, insuredAge, contractMonthTerm, feeAmount, claimDetails } = response.data;
        setValue("id", response.data.id);
        setValue("title", title);
        setValue("insuredAge", insuredAge);
        setValue("contractMonthTerm", contractMonthTerm);
        setValue("feeAmount", feeAmount);
        setClaims(claimDetails);
      }
    } catch (error) {
      //
    }
  };

  React.useEffect(() => {
    fetchPolicy();
  }, [slug]);

  return (
    <div>
      <div className="mb-[.8rem] flex gap-[2.4rem]">
        <div className="w-1/4 mb-[2.4rem]">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type="hidden" id="id" {...register("id")} />

            <Form.Item>
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" {...register("title")} error={errors.title && true} />

              {errors.title && <MessageError>{errors.title.message}</MessageError>}
            </Form.Item>

            <Form.Item>
              <Label htmlFor="insuredAge">Insured age</Label>
              <Input
                type="number"
                id="insuredAge"
                {...register("insuredAge")}
                error={errors.insuredAge && true}
              />

              {errors.insuredAge && <MessageError>{errors.insuredAge.message}</MessageError>}
            </Form.Item>

            <Form.Item>
              <Label htmlFor="contractMonthTerm">Contract month term</Label>
              <Input
                type="number"
                id="contractMonthTerm"
                {...register("contractMonthTerm")}
                error={errors.contractMonthTerm && true}
              />

              {errors.contractMonthTerm && (
                <MessageError>{errors.contractMonthTerm.message}</MessageError>
              )}
            </Form.Item>

            <Form.Item>
              <Label htmlFor="feeAmount">Fee amount</Label>
              <Input
                type="number"
                id="feeAmount"
                {...register("feeAmount")}
                error={errors.feeAmount && true}
              />

              {errors.feeAmount && <MessageError>{errors.feeAmount.message}</MessageError>}
            </Form.Item>

            <Form.Item className="mb-0">
              <Button type="submit" btnWidth="full">
                {isSubmitting ? <Spin /> : "Edit"}
              </Button>
            </Form.Item>
          </Form>
        </div>

        <table className="w-3/4 mb-[2.4rem]">
          <thead>
            <tr className={`flex w-full py-[0.6rem] ${styles.heading}`}>
              <th className="w-1/12 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  ID
                </Typography>
              </th>

              <th className="w-1/5 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Coverage
                </Typography>
              </th>

              <th className="w-1/6 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Insurance amount
                </Typography>
              </th>

              <th className="w-1/3 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Details
                </Typography>
              </th>
            </tr>
          </thead>

          <tbody>
            {claims.map((claim) => (
              <tr key={claim.id} className={`flex w-full py-[0.6rem]`}>
                <td className={`w-1/12 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    {claim.id}
                  </Typography>
                </td>

                <td className={`w-1/5 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    {claim.coverage}
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    {claim.insuranceAmount}
                  </Typography>
                </td>

                <td className={`w-1/3 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    {claim.details}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PolicyDetailModule;
