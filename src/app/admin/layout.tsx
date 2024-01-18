import React from "react";

import LayoutForAdmin from "@/layout/LayoutForAdmin";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutForAdmin>{children}</LayoutForAdmin>;
}
