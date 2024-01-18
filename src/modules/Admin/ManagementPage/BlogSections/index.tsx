"use client";

import { Pagination } from "antd";
import React from "react";

import Button from "@/components/Button";
import Typography from "@/components/Typography";

import styles from "./styles.module.scss";
// GENERATE 20 MOCK DATA FOR BLOG
// ID Title Author Category Tags Views Likes Comments Status
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
                  <Button btnSize="sm" btnVariant="secondary" className="mr-[0.6rem]">
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
