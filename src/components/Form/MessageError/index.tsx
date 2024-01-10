import React from "react";

import Typography from "@/components/Typography";

const MessageError = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography tag="p" fontSize="fs-xs" textColor="txtClr-danger" className="mt-[.8rem]">
      {children}
    </Typography>
  );
};

export default MessageError;
