"use client";

import React from "react";

import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import Typography from "@/components/Typography";
import { adminRoutes } from "@/constants/route";

import styles from "./styles.module.scss";

const LayoutForAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex gap-[2.4rem] p-[2.4rem] h-screen">
      <div className="w-1/5">
        <Sidebar as="nav" items={adminRoutes} />
      </div>
      <div className={`flex-1 w-full h-full overflow-hidden ${styles.mainSection}`}>
        <div className="flex justify-between items-start">
          <Typography tag="h1" fontSize="fs-2xl" fontWeight="fw-md" className="mb-[4.6rem]">
            Welcome, Admin
          </Typography>

          <Button btnVariant="secondary">Logout</Button>
        </div>

        {children}
      </div>
    </main>
  );
};

export default LayoutForAdmin;
