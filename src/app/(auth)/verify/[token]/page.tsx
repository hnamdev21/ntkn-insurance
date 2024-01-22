"use client";

import { message, Spin } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

import { get } from "@/apis/axiosInstance";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { path } from "@/constants/route";

const VerifyPage = ({ params }: { params: { token: string } }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const verifyAccount = async () => {
    const response = await get(`/users/verify/${params.token}`);

    if (response.success) {
      message.success("Verify successfully");
      router.push(path.Login);
    }

    setIsLoading(false);
  };

  const resendVerifyAccount = async () => {
    setIsLoading(true);

    const response = await get(`/users/verify/${params.token}`);

    if (response.success) {
      message.success("Resend verify successfully");
      router.push(path.Login);
    }

    setIsLoading(false);
  };

  React.useEffect(() => {
    verifyAccount();
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
  ) : (
    // Fail case
    <>
      <Typography tag="h1" fontSize="fs-md" className="mt-[2.rem]">
        Failed to verify account
      </Typography>
      <Button type="primary" btnWidth="auto" onClick={resendVerifyAccount}>
        Resend
      </Button>
    </>
  );
};

export default VerifyPage;
