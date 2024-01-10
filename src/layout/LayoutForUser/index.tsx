import React from "react";

import Header from "./Header";

const LayoutForUser = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full h-full overflow-hidden max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </main>
    </div>
  );
};

export default LayoutForUser;
