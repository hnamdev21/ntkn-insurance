"use client";

import { Pagination } from "antd";
import React from "react";

import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import Typography from "@/components/Typography";

import styles from "./styles.module.scss";

const categoryOptions = [
  { label: "All", value: "all" },
  { label: "Category 1", value: "Category 1" },
  { label: "Category 2", value: "Category 2" },
  { label: "Category 3", value: "Category 3" },
];

const tagOptions = [
  { label: "All", value: "all" },
  { label: "Tag 1", value: "tag 1" },
  { label: "Tag 2", value: "tag 2" },
  { label: "Tag 3", value: "tag 3" },
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
  { label: "Views", value: "views" },
  { label: "Likes", value: "Likes" },
];

const MOCK_DATA = [
  {
    id: 1,
    title: "Blog 1",
    author: "Nguyen Van A",
    category: "Category 1",
    tags: "Tag 1, Tag 2",
    views: 100,
    likes: 100,
    comments: 100,
    status: "Active",
  },
  {
    id: 2,
    title: "Blog 2",
    author: "Nguyen Van B",
    category: "Category 2",
    tags: "Tag 1, Tag 2",
    views: 100,
    likes: 100,
    comments: 100,
    status: "Active",
  },
];

const BlogManagementModule = () => {
  const onPageChange = (page: number, pageSize: number) => {
    page;
    pageSize;
  };

  return (
    <div>
      <div className="flex mb-[2.4rem] gap-[3.2rem]">
        <div className="w-1/4">
          <Input id="search" name="search" placeholder="Enter title or author" />
        </div>

        <div className="flex-1 flex gap-[3rem]">
          <div className="w-1/4 flex gap-[1.2rem] items-center">
            <Typography tag="p" fontWeight="fw-md">
              Category
            </Typography>

            <Select id="category" name="category" options={categoryOptions} />
          </div>

          <div className="w-1/4 flex gap-[1.2rem] items-center">
            <Typography tag="p" fontWeight="fw-md">
              Tag
            </Typography>

            <Select id="tag" name="tag" options={tagOptions} />
          </div>

          <div className="w-1/4 flex gap-[1.2rem] items-center">
            <Typography tag="p" fontWeight="fw-md">
              Status
            </Typography>

            <Select id="status" name="status" options={statusOptions} />
          </div>

          <div className="w-1/4 flex gap-[1.2rem] items-center">
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
                Title
              </Typography>
            </th>

            <th className="w-1/4 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Author
              </Typography>
            </th>

            <th className="w-1/6 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Category
              </Typography>
            </th>

            <th className="w-1/3 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Tags
              </Typography>
            </th>

            <th className="w-1/6 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Views
              </Typography>
            </th>

            <th className="w-1/6 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Likes
              </Typography>
            </th>

            <th className="w-1/6 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Comments
              </Typography>
            </th>

            <th className="w-1/6 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Status
              </Typography>
            </th>

            <th className="w-1/6 px-[1rem]">
              <Typography tag="h5" fontWeight="fw-md">
                Action
              </Typography>
            </th>
          </tr>
        </thead>

        <tbody>
          {MOCK_DATA.map((blog) => (
            <tr key={blog.id} className={`flex w-full py-[0.6rem] ${styles.row}`}>
              <td className={`w-1/12 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {blog.id}
                </Typography>
              </td>

              <td className={`w-1/3 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {blog.title}
                </Typography>
              </td>

              <td className={`w-1/4 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {blog.author}
                </Typography>
              </td>

              <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {blog.category}
                </Typography>
              </td>

              <td className={`w-1/3 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {blog.tags}
                </Typography>
              </td>

              <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {blog.views}
                </Typography>
              </td>

              <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {blog.likes}
                </Typography>
              </td>

              <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {blog.comments}
                </Typography>
              </td>

              <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  {blog.status}
                </Typography>
              </td>

              <td className={`w-1/6 px-[1rem] ${styles.col}`}>
                <Typography tag="p" fontWeight="fw-md">
                  <Button btnSize="sm" btnVariant="secondary" className="flex-1" btnWidth="full">
                    Edit
                  </Button>
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

export default BlogManagementModule;
