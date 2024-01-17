"use client";

import React from "react";

import Sidebar from "@/components/Sidebar";
import { adminRoutes } from "@/constants/route";

const LayoutForAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <div className="w-1/5 p-[2.4rem]">
        <Sidebar as="nav" items={adminRoutes} />
      </div>
      <div className="flex-1 w-full overflow-hidden pl-[2.4rem] pt-[2.4rem]">{children}</div>
    </main>
  );
};

export default LayoutForAdmin;
