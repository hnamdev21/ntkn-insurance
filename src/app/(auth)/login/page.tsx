"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Divider, message, Spin } from "antd";
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
import useLocalStorage from "@/hooks/useLocalStorage";

import styles from "./styles.module.scss";

const TIMEOUT = 1000;
const formValidator = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
  saveLogin: yup.boolean(),
});

const LoginPage = () => {
  const router = useRouter();
  const [role, setRole] = useLocalStorage<number | null>("role", null);

  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors }, resetField } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await post<
        {
          id: number;
          fullName: string;
          username: string;
          email: string;
          avatar: string;
          role: number;
          status: number;
        },
        FieldValues
      >("/users/login", data);

      if (response.success) {
        setRole(response.data.role);

        message.success("Login successfully");
        router.push(path.Home);
      }
    } catch (error) {
      role; // JUST FOR IGNORE ESLINT
      resetField("password");
    }
  };

  const loginWithGoogle = async () => {
    // Fake API call
    await new Promise((resolve) => {
      setTimeout(resolve, TIMEOUT);
    });

    return true;
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
        Welcome
      </Typography>

      <Form.Item>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          {...register("username")}
          error={errors.username && true}
        />
        {errors.username && <MessageError>{errors.username.message}</MessageError>}
      </Form.Item>

      <Form.Item>
        <Label htmlFor="password">Password</Label>
        <InputPassword
          id="password"
          {...register("password")}
          autoComplete="on"
          error={errors.password && true}
        />

        {errors.password && <MessageError>{errors.password.message}</MessageError>}
      </Form.Item>

      <Form.Item className="-mt-[.6rem] flex w-full items-center">
        <Input type="checkbox" id="saveLogin" {...register("saveLogin")} />
        <Label htmlFor="saveLogin" className="inline-block ml-[.8rem] mb-[0.0rem]">
          Remember me
        </Label>
      </Form.Item>

      <Form.Item className="mb-0">
        <Button type="submit" btnWidth="full">
          {isSubmitting ? <Spin /> : "Login"}
        </Button>
      </Form.Item>

      <Divider>Or</Divider>

      <Form.Item>
        <Button type="button" btnWidth="full" btnVariant="secondary" onClick={loginWithGoogle}>
          Login with Google
        </Button>
      </Form.Item>

      <Typography tag="p" fontSize="fs-sm" textAlign="center" className="mt-[3rem]">
        Don&apos;t have an account?{" "}
        <Button
          as="a"
          btnVariant="tertiary"
          underlineAnimation
          className={styles.link}
          href={path.Register}
        >
          Register
        </Button>
      </Typography>
    </Form>
  );
};

export default LoginPage;
