"use client";

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

import AvatarInput from "./AvatarInput";
import styles from "./styles.module.scss";

const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Unknown",
    value: "unknown",
  },
];

const TIMEOUT = 1000;
const formValidator = yup.object().shape({
  fullName: yup.string().required("Please enter your full name"),
  gender: yup.string(),
  address: yup.string(),
  phoneNumber: yup.string(),
});

const Profile = () => {
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
    <div className="flex">
      <Form onSubmit={handleSubmit(onSubmit)} className={cn("flex-1 pr-[4.8rem]", styles.form)}>
        <Form.Item>
          <AvatarInput />
        </Form.Item>

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
            <Label htmlFor="gender">Gender</Label>
            <Select id="gender" {...register("gender")} options={genderOptions} />
          </div>

          <div className="flex-1">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber")}
              error={errors.phoneNumber && true}
            />
            {errors.phoneNumber && <MessageError>{errors.phoneNumber.message}</MessageError>}
          </div>
        </Form.Item>

        <Form.Item>
          <Label htmlFor="address">Address</Label>
          <Input type="text" id="address" {...register("address")} error={errors.address && true} />
          {errors.address && <MessageError>{errors.address.message}</MessageError>}
        </Form.Item>

        <Button type="submit" btnWidth="auto">
          {isSubmitting ? <Spin /> : "Save"}
        </Button>
      </Form>

      <div className="flex-1 pl-[4.8rem]"></div>
    </div>
  );
};

export default Profile;
