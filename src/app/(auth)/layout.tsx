import React from "react";

import Button from "@/components/Button";
import { path } from "@/constants/route";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/5">
        <Button
          as="a"
          href={path.Home}
          btnVariant="tertiary"
          underlineAnimation
          className="inline-block mb-[2.rem]"
        >
          Back to Home
        </Button>

        {children}
      </div>
    </main>
  );
}
