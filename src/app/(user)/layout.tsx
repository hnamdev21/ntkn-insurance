import React from "react";

import LayoutForUser from "@/layout/LayoutForUser";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutForUser>{children}</LayoutForUser>;
}
