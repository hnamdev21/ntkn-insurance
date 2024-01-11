"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Spin } from "antd";
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
  email: yup.string().required("Please enter email").email("Please enter a valid email"),
});

const ForgotPasswordPage = () => {
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        tag="h1"
        fontSize="fs-xl"
        fontWeight="fw-md"
        textAlign="center"
        className="mb-[2.8rem]"
      >
        Forgot Password
      </Typography>

      <Form.Item>
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" {...register("email")} error={errors.email && true} />
        {errors.email && <MessageError>{errors.email.message}</MessageError>}
      </Form.Item>

      <Form.Item className="mb-0">
        <Button type="submit" btnWidth="full">
          {isSubmitting ? <Spin /> : "Send"}
        </Button>
      </Form.Item>

      <Typography tag="p" fontSize="fs-sm" textAlign="center" className="mt-[3rem]">
        Already remember?{" "}
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
};

export default ForgotPasswordPage;
