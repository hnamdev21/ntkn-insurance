"use client";

import { Spin } from "antd";
import React from "react";

import Typography from "@/components/Typography";

const TIMEOUT = 5000;

const VerifyPage = ({ params }: { params: { token: string } }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // Fake API call
    setTimeout(() => {
      setIsLoading(false);
    }, TIMEOUT);
  }, [params.token]);

  return isLoading ? (
    <div className="w-full h-full flex justify-center items-center pt-[4rem]">
      <div className="w-1/2 flex flex-col justify-center items-center gap-[2.4rem]">
        <Spin />

        <Typography tag="h1" fontSize="fs-md" className="mt-[2.rem]">
          Verifying...
        </Typography>
      </div>
    </div>
  ) : null;
};

export default VerifyPage;
