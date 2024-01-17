import React from "react";

import Typography from "@/components/Typography";

import PaymentDeadlineCard from "./PaymentDeadlineCard";
import PaymentHistoryCard from "./PaymentHistoryCard";

const Payment = () => {
  return (
    <div className="flex">
      <div className="flex-1 pr-[4.8rem]">
        <Typography tag="h4" fontSize="fs-md" fontWeight="fw-md" className="mb-[1.6rem]">
          Payment Deadlines
        </Typography>

        <ul>
          <li>
            <PaymentDeadlineCard
              contractId="1234567890"
              policyId="1234567890"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in urna nec felis aliquet
              faucibus. Nunc sit amet."
              amount="100"
              date="20/10/2023"
              status={1}
            />
          </li>
        </ul>
      </div>

      <div className="flex-1 pl-[4.8rem]">
        <Typography tag="h4" fontSize="fs-md" fontWeight="fw-md" className="mb-[1.6rem]">
          Payment History
        </Typography>

        <ul>
          <li>
            <PaymentHistoryCard
              contractId="1234567890"
              policyId="1234567890"
              amount="100"
              date="20/10/2023"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Payment;
