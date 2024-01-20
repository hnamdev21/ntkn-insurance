"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Pagination, Spin } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Select from "@/components/Form/Select";
import Typography from "@/components/Typography";

import styles from "./styles.module.scss";

// GENERATE 10 MOCK DATA
const TOTAL_MOCK_DATA = 10;
const MAX_ADMIN = 2;
const NUMBER_MAKE_ID_TO_STRING = 65;

const MOCK_DATA = [
  ...[...Array(TOTAL_MOCK_DATA)].map((_, index) => ({
    id: index,
    name: `Nguyen Van ${String.fromCharCode(NUMBER_MAKE_ID_TO_STRING + index)}`,
    email: `${String.fromCharCode(NUMBER_MAKE_ID_TO_STRING + index)}@gmail.com`,
    address: "Hanoi",
    phone: "0123456789",
    role: index < MAX_ADMIN ? "Admin" : "User",
    status: "Active",
  })),
];

const roleOptions = [
  { label: "All", value: "all" },
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
];

const statusOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];

const TIMEOUT = 1000;
const formValidator = yup.object().shape({
  fullName: yup.string().required("Please enter employee full name"),
  username: yup.string().required("Please enter employee username"),
  email: yup.string().required("Please enter employee email").email("Please enter a valid email"),
});

const UserManagementModule = () => {
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

  const onPageChange = (page: number, pageSize: number) => {
    page;
    pageSize;
  };

  return (
    <div>
      <div className="mb-[.8rem]">
        <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Form.Item>
            <Label htmlFor="fullName">Full name</Label>
            <Input
              type="text"
              id="fullName"
              {...register("fullName")}
              error={errors.fullName && true}
            />
          </Form.Item>

          <Form.Item>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              {...register("username")}
              error={errors.username && true}
            />
          </Form.Item>

          <Form.Item>
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="email" {...register("email")} error={errors.email && true} />
          </Form.Item>

          <Form.Item className="mb-0">
            <Button type="submit" btnWidth="full">
              {isSubmitting ? <Spin /> : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="flex mb-[2.4rem] gap-[3.2rem]">
        <div className="w-1/3">
          <Input id="search" name="search" placeholder="Enter name, email, ..." />
        </div>

        <div className="flex-1 flex gap-[3rem]">
          <div className="flex gap-[1.2rem] items-center">
            <Typography tag="p" fontWeight="fw-md">
              Role
            </Typography>

            <Select id="tag" name="tag" options={roleOptions} />
          </div>

          <div className="flex gap-[1.2rem] items-center">
            <Typography tag="p" fontWeight="fw-md">
              Status
            </Typography>

            <Select id="status" name="status" options={statusOptions} />
          </div>

          <div className="flex gap-[1.2rem] items-center">
            <Typography tag="p" fontWeight="fw-md">
              Sort
            </Typography>

            <Select id="sort" name="sort" options={sortOptions} />
          </div>
        </div>
      </div>

      <table className="w-full mb-[2.4rem]">
        <thead>
          <tr className={`flex w-full py-[0.6rem] ${styles.heading}`}>
            <th className="w-1/12 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                ID
              </Typography>
            </th>

            <th className="w-1/3 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Full name
              </Typography>
            </th>

            <th className="w-1/3 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Email
              </Typography>
            </th>

            <th className="w-1/2 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Address
              </Typography>
            </th>

            <th className="w-1/3 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Phone number
              </Typography>
            </th>

            <th className="w-1/6 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Role
              </Typography>
            </th>

            <th className="w-1/12 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Status
              </Typography>
            </th>
          </tr>
        </thead>

        <tbody>
          {MOCK_DATA.map((user) => (
            <tr key={user.id} className={`flex w-full py-[0.6rem] ${styles.row}`}>
              <td className={`w-1/12 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {user.id}
                </Typography>
              </td>

              <td className={`w-1/3 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {user.name}
                </Typography>
              </td>

              <td className={`w-1/3 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {user.email}
                </Typography>
              </td>

              <td className={`w-1/2 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {user.address}
                </Typography>
              </td>

              <td className={`w-1/3 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {user.phone}
                </Typography>
              </td>

              <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {user.role}
                </Typography>
              </td>

              <td className={`w-1/12 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {user.status}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex justify-center">
        <Pagination
          defaultCurrent={1}
          hideOnSinglePage
          pageSize={20}
          total={40}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default UserManagementModule;
