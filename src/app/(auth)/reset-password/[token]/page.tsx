"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Spin } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Input, { InputPassword } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Typography from "@/components/Typography";

const TIMEOUT = 1000;
const formValidator = yup.object().shape({
  oldPassword: yup.string().required("Please enter old password"),
  password: yup.string().required("Please enter password"),
  confirmPassword: yup
    .string()
    .required("Please enter confirm password")
    .oneOf([yup.ref("password")], "Confirm password does not match"),
});

const ResetPassword = ({ params }: { params: { token: string } }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  const onSubmit = async (data: FieldValues) => {
    // Fake API call
    await new Promise((resolve) => {
      setTimeout(resolve, TIMEOUT);
    });

    params;

    return data;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        tag="h1"
        fontSize="fs-xl"
        fontWeight="fw-md"
        textAlign="center"
        className="mb-[2.8rem]"
      >
        Reset Password
      </Typography>

      <Form.Item>
        <Label htmlFor="oldPassword" required>
          Password
        </Label>
        <Input
          id="oldPassword"
          {...register("oldPassword")}
          autoComplete="on"
          error={errors.oldPassword && true}
        />
        {errors.oldPassword && <MessageError>{errors.oldPassword.message as string}</MessageError>}
      </Form.Item>

      <Form.Item>
        <Label htmlFor="password" required>
          Password
        </Label>
        <InputPassword
          type="password"
          id="password"
          {...register("password")}
          autoComplete="on"
          error={errors.password && true}
        />
        {errors.password && <MessageError>{errors.password.message as string}</MessageError>}
      </Form.Item>

      <Form.Item>
        <Label htmlFor="confirmPassword" required>
          Password
        </Label>
        <InputPassword
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          autoComplete="on"
          error={errors.confirmPassword && true}
        />
        {errors.confirmPassword && (
          <MessageError>{errors.confirmPassword.message as string}</MessageError>
        )}
      </Form.Item>

      <Form.Item className="mb-0">
        <Button type="submit" btnWidth="full">
          {isSubmitting ? <Spin /> : "Reset Password"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResetPassword;
