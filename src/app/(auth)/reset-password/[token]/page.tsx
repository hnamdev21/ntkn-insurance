"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { message, Spin } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";

import { post } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { InputPassword } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Typography from "@/components/Typography";
import { path } from "@/constants/route";

const formValidator = yup.object().shape({
  password: yup.string().required("Please enter password"),
  confirmPassword: yup
    .string()
    .required("Please enter confirm password")
    .oneOf([yup.ref("password")], "Confirm password does not match"),
});

const ResetPassword = ({ params }: { params: { token: string } }) => {
  const router = useRouter();

  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await post("/users/reset-password/" + params.token, data);

      if (response.success) {
        message.success("Reset password successfully");
        router.push(path.Login);
      }
    } catch (error) {
      reset();
    }
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
          Confirm password
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
