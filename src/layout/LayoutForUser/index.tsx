import React from "react";

import Header from "./Header";

const LayoutForUser = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full h-full overflow-hidden max-w-8xl mx-auto">{children}</main>
    </div>
  );
};

export default LayoutForUser;
