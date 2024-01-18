"use client";

import { Pagination } from "antd";
import React from "react";

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

const UserManagementModule = () => {
  const onPageChange = (page: number, pageSize: number) => {
    page;
    pageSize;
  };

  return (
    <div>
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
