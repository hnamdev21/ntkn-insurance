import { yupResolver } from "@hookform/resolvers/yup";
import { Spin } from "antd";
import cn from "classnames";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Select from "@/components/Form/Select";
import Typography from "@/components/Typography";

import styles from "./styles.module.scss";

const claimOptions = [
  {
    label: "Claim 1",
    value: "claim1",
  },
  {
    label: "Claim 2",
    value: "claim2",
  },
  {
    label: "Claim 3",
    value: "claim3",
  },
];

const TIMEOUT = 1000;
const formValidator = yup.object().shape({
  contractId: yup.string().required("Please enter your contract number"),
  description: yup.string().required("Please enter your description"),
  claimId: yup.string().required("Please select your claim type"),
  otp: yup.string().required("Please enter your OTP"),
});

const ClaimRequests = () => {
  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  const onSubmit = async (data: FieldValues) => {
    // Fake API call
    await new Promise((resolve) => {
      setTimeout(resolve, TIMEOUT);
    });

    return data;
  };

  const sendOtp = async () => {
    // Fake API call
    await new Promise((resolve) => {
      setTimeout(resolve, TIMEOUT);
    });
  };

  return (
    <div className="flex">
      <Form onSubmit={handleSubmit(onSubmit)} className={cn("flex-1", styles.form)}>
        <Typography tag="h4" fontSize="fs-md" fontWeight="fw-md" className="mb-[1.6rem]">
          Claim Request Form
        </Typography>

        <Form.Item className="flex gap-[2.4rem]">
          <div className="flex-1">
            <Label htmlFor="contractId" required>
              Contract No.
            </Label>
            <Input
              type="text"
              id="contractId"
              {...register("contractId")}
              error={errors.contractId && true}
            />
            {errors.contractId && <MessageError>{errors.contractId.message}</MessageError>}
          </div>

          <div className="flex-1">
            <Label htmlFor="claimId">Claim</Label>
            <Select id="claimId" {...register("claimId")} options={claimOptions} />
          </div>
        </Form.Item>

        <Form.Item>
          <Label htmlFor="description" required>
            Description
          </Label>
          <Input
            type="text"
            id="description"
            {...register("description")}
            error={errors.description && true}
          />
          {errors.description && <MessageError>{errors.description.message}</MessageError>}
        </Form.Item>

        <Form.Item>
          <Label htmlFor="otp" required>
            OTP
          </Label>

          <div className="flex items-start gap-[1.2rem]">
            <Input
              type="text"
              id="otp"
              {...register("otp")}
              error={errors.otp && true}
              className={styles.otpInput}
            />
            <Button type="button" onClick={sendOtp} className={styles.sendOtpBtn}>
              Send OTP
            </Button>
          </div>
          {errors.otp && <MessageError>{errors.otp.message}</MessageError>}
        </Form.Item>

        <Button type="submit" btnWidth="auto">
          {isSubmitting ? <Spin /> : "Request"}
        </Button>
      </Form>

      <div className="flex-1 pl-[4.8rem]">
        <Typography tag="h4" fontSize="fs-md" fontWeight="fw-md" className="mb-[1.6rem]">
          Claim Requests Log
        </Typography>
      </div>
    </div>
  );
};

export default ClaimRequests;
