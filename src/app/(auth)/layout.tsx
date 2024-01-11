import React from "react";

import Button from "@/components/Button";
import { HomeIcon } from "@/components/Icons";
import { path } from "@/constants/route";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/5">
        <div className="w-full flex items-center justify-center  mb-[4.rem]">
          <Button
            as="a"
            href={path.Home}
            btnVariant="tertiary"
            underlineAnimation
            className="inline-block"
          >
            <HomeIcon />
          </Button>
        </div>

        {children}
      </div>
    </main>
  );
}
