"use client";

import { Pagination } from "antd";
import React from "react";

import Button from "@/components/Button";
import Input from "@/components/Form/Input";
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

const UserManagementModule = () => {
  const onPageChange = (page: number, pageSize: number) => {
    page;
    pageSize;
  };

  return (
    <div>
      <div className="mb-[.8rem]">
        <Button
          as="a"
          href="/admin/blogs/create"
          btnSize="sm"
          btnVariant="tertiary"
          underlineAnimation
        >
          Create account for employee
        </Button>
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
