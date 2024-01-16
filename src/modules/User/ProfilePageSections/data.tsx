import React from "react";

import { StatusItem } from "@/components/Sidebar";

import ClaimRequests from "./ClaimRequests";
import Payment from "./Payment";
import Profile from "./Profile";

export const items: StatusItem[] = [
  {
    label: "Profile",
    value: "profile",
  },
  {
    label: "Claim requests",
    value: "claim-requests",
  },
  {
    label: "Payment",
    value: "payment",
  },
];

export const components: { [key: string]: React.ReactElement | null } = {
  profile: <Profile />,
  "claim-requests": <ClaimRequests />,
  payment: <Payment />,
};
