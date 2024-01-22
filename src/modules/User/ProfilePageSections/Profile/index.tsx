"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { message, Spin } from "antd";
import cn from "classnames";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";

import { get, put } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import MessageError from "@/components/Form/MessageError";
import Select from "@/components/Form/Select";
import { sentRequestWithFilesHeaderConfig } from "@/constants/configRequest";
import { MB } from "@/constants/other";

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

const MAX_MB = 2;

const formValidator = yup.object().shape({
  fullName: yup.string(),
  gender: yup.string(),
  address: yup.string(),
  phoneNumber: yup.string(),
  avatarImage: yup.mixed().test("fileSize", "The file is too large", (value: any) => {
    if (!value) {
      return true;
    }

    return value[0].size <= MB * MAX_MB;
  }),
});

const Profile = () => {
  const [profile, setProfile] = React.useState<{
    fullName: string;
    gender: string;
    address: string;
    phoneNumber: string;
    avatar: string;
  }>({
    fullName: "",
    gender: "",
    address: "",
    phoneNumber: "",
    avatar: "",
  });
  const [avatarBase64, setAvatarBase64] = React.useState<string | null>(null);

  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await put(
        "/users/mine",
        { ...data, avatarImage: data.avatarImage[0] },
        { ...sentRequestWithFilesHeaderConfig }
      );

      if (response.success) {
        message.success("Update profile successfully");
      }
    } catch (error) {
      //
    }
  };

  const getProfile = async () => {
    const response = await get<{
      fullName: string;
      gender: string;
      address: string;
      phoneNumber: string;
      avatar: string;
    }>("/users/mine");

    setProfile(response.data);
  };

  React.useEffect(() => {
    getProfile();
  }, []);

  const handleOnChangeAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setAvatarBase64(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex">
      <Form onSubmit={handleSubmit(onSubmit)} className={cn("flex-1 pr-[4.8rem]", styles.form)}>
        <Form.Item>
          <AvatarInput
            {...register("avatarImage", {
              onChange: handleOnChangeAvatar,
            })}
            avatarBase64={avatarBase64}
            src={profile?.avatar}
          />
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
              value={profile?.fullName}
              onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
              error={errors.fullName && true}
            />
            {errors.fullName && <MessageError>{errors.fullName.message}</MessageError>}
          </div>

          <div className="flex-1">
            <Label htmlFor="gender">Gender</Label>
            <Select
              id="gender"
              {...register("gender")}
              options={genderOptions}
              defaultValue={profile?.gender}
            />
          </div>

          <div className="flex-1">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber")}
              value={profile?.phoneNumber}
              onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
              error={errors.phoneNumber && true}
            />
            {errors.phoneNumber && <MessageError>{errors.phoneNumber.message}</MessageError>}
          </div>
        </Form.Item>

        <Form.Item>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            {...register("address")}
            value={profile?.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            error={errors.address && true}
          />
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
