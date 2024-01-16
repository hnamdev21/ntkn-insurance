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
import Textarea from "@/components/Form/Textarea";

const TIMEOUT = 1000;
const formValidator = yup.object().shape({
  fullName: yup.string().required("Please enter your full name"),
  email: yup.string().required("Please enter your email").email("Please enter a valid email"),
  feedback: yup.string().required("Please enter your feedback"),
});

const onSubmit = async (data: FieldValues) => {
  // Fake API call
  await new Promise((resolve) => {
    setTimeout(resolve, TIMEOUT);
  });

  return data;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item className="flex gap-[2.4rem]">
        <div className="flex-1">
          <Label htmlFor="fullName" required>
            Full name
          </Label>
          <Input
            type="text"
            id="fullName"
            {...register("fullName")}
            error={errors.fullName && true}
          />
          {errors.fullName && <MessageError>{errors.fullName.message}</MessageError>}
        </div>

        <div className="flex-1">
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input type="text" id="email" {...register("email")} error={errors.email && true} />
          {errors.email && <MessageError>{errors.email.message}</MessageError>}
        </div>
      </Form.Item>

      <Form.Item>
        <Label htmlFor="feedback" required>
          Feedback
        </Label>
        <Textarea
          id="feedback"
          {...register("feedback")}
          error={errors.feedback && true}
        ></Textarea>
        {errors.feedback && <MessageError>{errors.feedback.message}</MessageError>}
      </Form.Item>

      <Form.Item className="mb-0">
        <Button type="submit" btnWidth="full">
          {isSubmitting ? <Spin /> : "Send"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
