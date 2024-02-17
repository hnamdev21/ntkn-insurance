"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { message, Spin } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { get, post } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Typography from "@/components/Typography";

import styles from "./styles.module.scss";

const MIN_AGE = 16;
const MIN_CONTRACT_MONTH_TERM = 1;
const MIN_FEE_AMOUNT = 100;

const formValidator = yup.object().shape({
  title: yup.string().required("Please enter title"),
  insuredAge: yup
    .number()
    .required("Please enter insured age")
    .positive("Please enter a positive number")
    .integer("Please enter an integer")
    .min(MIN_AGE, "Please enter a number greater than 1"),
  contractMonthTerm: yup
    .number()
    .required("Please enter contract month term")
    .positive("Please enter a positive number")
    .integer("Please enter an integer")
    .min(MIN_CONTRACT_MONTH_TERM, "Please enter a number greater than 1"),
  feeAmount: yup
    .number()
    .required("Please enter fee amount")
    .positive("Please enter a positive number")
    .min(MIN_FEE_AMOUNT, "Please enter a number greater than 100"),
});

const PoliciesModule = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [policies, setPolicies] = React.useState<
    {
      id: number;
      title: string;
      insuredAge: number;
      contractMonthTerm: number;
      feeAmount: number;
    }[]
  >([]);

  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
    values: {
      title: "",
      insuredAge: MIN_AGE,
      contractMonthTerm: MIN_CONTRACT_MONTH_TERM,
      feeAmount: MIN_FEE_AMOUNT,
    },
  });

  const fetchPolicies = async () => {
    setIsLoading(true);
    isLoading; // JUST TO REMOVE TS ERROR

    try {
      const response = await get<[]>(`/policies`);

      if (response.success) {
        setPolicies(response.data);
      }
    } catch (error) {
      //
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: {
    title: string;
    insuredAge: number;
    contractMonthTerm: number;
    feeAmount: number;
  }) => {
    setIsLoading(true);

    try {
      const response = await post(`/policies`, data);

      if (response.success) {
        message.success("Policy created successfully");
        fetchPolicies();
      }
    } catch (error) {
      //
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  React.useEffect(() => {
    fetchPolicies();
  }, []);

  return (
    <div>
      <div className="mb-[.8rem] flex gap-[2.4rem]">
        <div className="w-1/4 mb-[2.4rem]">
          <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
                {isSubmitting ? <Spin /> : "Create"}
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

              <th className="w-1/2 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Title
                </Typography>
              </th>

              <th className="w-1/6 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Insured age
                </Typography>
              </th>

              <th className="w-1/6 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Contract month term
                </Typography>
              </th>

              <th className="w-1/6 px-[1rem]">
                <Typography tag="h5" fontWeight="fw-md">
                  Fee amount
                </Typography>
              </th>
            </tr>
          </thead>

          <tbody>
            {policies.map((policy) => (
              <tr key={policy.id} className={`flex w-full py-[0.6rem] ${styles.row}`}>
                <td className={`w-1/12 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    {policy.id}
                  </Typography>
                </td>

                <td className={`w-1/2 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    {policy.title}
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    {policy.insuredAge}
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    {policy.contractMonthTerm}
                  </Typography>
                </td>

                <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                  <Typography tag="p" fontWeight="fw-md">
                    {policy.feeAmount}
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

export default PoliciesModule;
