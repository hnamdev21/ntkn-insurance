import React from "react";

import Button from "@/components/Button";
import Typography from "@/components/Typography";

import styles from "./styles.module.scss";

type PaymentDeadlineCardProps = React.BaseHTMLAttributes<HTMLDivElement> & {
  contractId: string;
  policyId: string;
  description: string;
  amount: string;
  date: string;
  status: number;
};

const PaymentDeadlineCard = ({
  contractId,
  policyId,
  description,
  amount,
  date,
  status,
  ...props
}: PaymentDeadlineCardProps) => {
  return (
    <div {...props} className={styles.card}>
      <div className="flex gap-[3.6rem]">
        <Typography tag="h4" fontWeight="fw-md" className="mb-[1.6rem]">
          Contract No. {contractId}
        </Typography>
        <Typography tag="h4" fontWeight="fw-md" className="mb-[1.6rem]">
          Policy {policyId}
        </Typography>
      </div>

      <Typography tag="h4" className="mb-[1.6rem]">
        {description}
      </Typography>

      <div className="flex items-center justify-between gap-[2rem]">
        <div className="flex justify-between gap-[1.2rem] w-2/3">
          <Typography tag="h4" fontWeight="fw-md" fontSize="fs-md">
            Status: {status}
          </Typography>
          <Typography tag="h4" fontWeight="fw-md" fontSize="fs-md">
            Date due: {date}
          </Typography>
          <Typography tag="h4" fontWeight="fw-md" fontSize="fs-md">
            {amount}$
          </Typography>
        </div>

        <Button btnSize="sm" btnWidth="full" className="flex-1">
          Pay
        </Button>
      </div>
    </div>
  );
};

export default PaymentDeadlineCard;
