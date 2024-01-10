"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Spin } from "antd";
import Link from "next/link";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Typography from "@/components/Typography";
import { path } from "@/constants/route";

import styles from "./styles.module.scss";

const TIMEOUT = 1000;
const formValidator = yup.object().shape({
  username: yup.string().required("Please enter username"),
  password: yup.string().required("Please enter password"),
  confirmPassword: yup
    .string()
    .required("Please enter confirm password")
    .oneOf([yup.ref("password")], "Confirm password does not match"),
  email: yup.string().required("Please enter email").email("Please enter a valid email"),
  receiveNews: yup.boolean(),
});

function RegisterPage() {
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
        Create an account
      </Typography>

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
        <Input
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
        <Input
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

      <Form.Item className="flex w-full items-center">
        <Input type="checkbox" id="receiveNews" {...register("receiveNews")} />
        <Label htmlFor="receiveNews" className="inline-block ml-[.8rem] mb-[0.0rem]">
          Receive news and special offers
        </Label>
      </Form.Item>

      <Form.Item className="mb-0">
        <Button type="submit" btnWidth="full">
          {isSubmitting ? <Spin /> : "Create account"}
        </Button>
      </Form.Item>

      <Typography tag="p" fontSize="fs-sm" textAlign="center" className="mt-[3rem]">
        Already have an account?{" "}
        <Link href={path.Login} className={styles.login}>
          Login now
        </Link>
      </Typography>
    </Form>
  );
}

export default RegisterPage;
