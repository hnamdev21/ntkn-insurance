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
import Input, { InputPassword } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Typography from "@/components/Typography";
import { path } from "@/constants/route";

import styles from "./styles.module.scss";

const formValidator = yup.object().shape({
  fullName: yup.string().required("Please enter full name"),
  username: yup.string().required("Please enter username"),
  password: yup.string().required("Please enter password"),
  confirmPassword: yup
    .string()
    .required("Please enter confirm password")
    .oneOf([yup.ref("password")], "Confirm password does not match"),
  email: yup.string().required("Please enter email").email("Please enter a valid email"),
});

function RegisterPage() {
  const router = useRouter();

  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await post("/users", data);

      if (response.success) {
        message.success("Register successfully");
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
        Create Account
      </Typography>

      <Form.Item>
        <Label htmlFor="fullName" required>
          Full name
        </Label>
        <Input
          type="text"
          id="fullName"
          {...register("fullName")}
          error={errors.fullName && true}
        />
        {errors.fullName && <MessageError>{errors.fullName.message as string}</MessageError>}
      </Form.Item>

      <Form.Item>
        <Label htmlFor="username" required>
          Username
        </Label>
        <Input
          type="text"
          id="username"
          {...register("username")}
          error={errors.username && true}
        />
        {errors.username && <MessageError>{errors.username.message as string}</MessageError>}
      </Form.Item>

      <Form.Item>
        <Label htmlFor="password" required>
          Password
        </Label>
        <InputPassword
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
          id="confirmPassword"
          {...register("confirmPassword")}
          autoComplete="on"
          error={errors.confirmPassword && true}
        />
        {errors.confirmPassword && (
          <MessageError>{errors.confirmPassword.message as string}</MessageError>
        )}
      </Form.Item>

      <Form.Item>
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input type="email" id="email" {...register("email")} error={errors.email && true} />

        {errors.email ? (
          <MessageError>{errors.email.message as string}</MessageError>
        ) : (
          <Typography tag="p" fontSize="fs-xs" className="mt-[.8rem]">
            We will send you a verification email.
          </Typography>
        )}
      </Form.Item>

      <Form.Item className="mb-0">
        <Button type="submit" btnWidth="full">
          {isSubmitting ? <Spin /> : "Create Account"}
        </Button>
      </Form.Item>

      <Typography tag="p" fontSize="fs-sm" textAlign="center" className="mt-[3rem]">
        Already have an account?{" "}
        <Button
          as="a"
          href={path.Login}
          className={styles.link}
          btnVariant="tertiary"
          underlineAnimation
        >
          Login now
        </Button>
      </Typography>
    </Form>
  );
}

export default RegisterPage;
