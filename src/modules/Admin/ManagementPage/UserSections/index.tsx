"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Pagination, Spin } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";

import { get, post } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Select from "@/components/Form/Select";
import Typography from "@/components/Typography";
import { roleOptions, sortOptions, statusOptions } from "@/constants/other";
import useDebounce from "@/hooks/useDebounce";

import styles from "./styles.module.scss";

const formValidator = yup.object().shape({
  fullName: yup.string().required("Please enter employee full name"),
  username: yup.string().required("Please enter employee username"),
  email: yup.string().required("Please enter employee email").email("Please enter a valid email"),
});

const UserManagementModule = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState<
    {
      id: string;
      fullName: string;
      email: string;
      address: string;
      phone: string;
      role: number;
      status: number;
    }[]
  >([]);
  const [filter, setFilter] = React.useState({
    role: "0",
    status: "0",
    sort: "default",
    page: 1,
    pageSize: 20,
  });
  const [term, setTerm] = React.useState("");
  const termDebounce = useDebounce(term);

  // prettier-ignore
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: yupResolver(formValidator),
    mode: "onBlur",
  });

  const fetchUsers = async () => {
    let uri = "/users?";

    if (termDebounce) uri += `term=${termDebounce}&`;

    uri +=
      `role=${filter.role}&` +
      `status=${filter.status}&` +
      `sort=${filter.sort}&` +
      `page=${filter.page}&` +
      `limit=${filter.pageSize}`;

    setIsLoading(true);

    const response = await get<[]>(uri);

    if (response.success) {
      setUsers(response.data);
    }

    setIsLoading(false);
    isLoading; // JUST TO DISABLE ESLINT
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await post("/users/employee", data);

      if (response.success) {
        fetchUsers();
      }
    } catch (error) {
      //
    }
  };

  const onPageChange = (page: number, pageSize: number) => {
    setFilter({ ...filter, page, pageSize });
  };

  React.useEffect(() => {
    fetchUsers();
  }, [termDebounce, filter]);

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
          <Input
            id="search"
            name="search"
            placeholder="Enter name, email, ..."
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>

        <div className="flex-1 flex gap-[3rem]">
          <div className="flex gap-[1.2rem] items-center">
            <Typography tag="p" fontWeight="fw-md">
              Role
            </Typography>

            <Select
              id="tag"
              name="tag"
              options={roleOptions}
              onChange={(event) =>
                setFilter({ ...filter, role: (event.target as HTMLSelectElement).value })
              }
            />
          </div>

          <div className="flex gap-[1.2rem] items-center">
            <Typography tag="p" fontWeight="fw-md">
              Status
            </Typography>

            <Select
              id="status"
              name="status"
              options={statusOptions}
              onChange={(event) =>
                setFilter({ ...filter, status: (event.target as HTMLSelectElement).value })
              }
            />
          </div>

          <div className="flex gap-[1.2rem] items-center">
            <Typography tag="p" fontWeight="fw-md">
              Sort
            </Typography>

            <Select
              id="sort"
              name="sort"
              options={sortOptions}
              onChange={(event) =>
                setFilter({ ...filter, sort: (event.target as HTMLSelectElement).value })
              }
            />
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
          {users.map((user) => (
            <tr key={user.id} className={`flex w-full py-[0.6rem] ${styles.row}`}>
              <td className={`w-1/12 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {user.id}
                </Typography>
              </td>

              <td className={`w-1/3 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {user.fullName}
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
