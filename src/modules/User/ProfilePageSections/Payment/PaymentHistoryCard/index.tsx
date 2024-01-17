import React from "react";

import Typography from "@/components/Typography";

import styles from "./styles.module.scss";

type PaymentHistoryCardProps = React.BaseHTMLAttributes<HTMLDivElement> & {
  contractId: string;
  policyId: string;
  amount: string;
  date: string;
};

const PaymentHistoryCard = ({
  contractId,
  policyId,
  amount,
  date,
  ...props
}: PaymentHistoryCardProps) => {
  return (
    <div {...props} className={styles.card}>
      <div className="flex gap-[3.6rem]">
        <div>
          <Typography tag="h4" fontWeight="fw-md" className="mb-[1.6rem]">
            Contract No. {contractId}
          </Typography>
          <Typography tag="h4" fontWeight="fw-md" fontSize="fs-md">
            Paid date: {date}
          </Typography>
        </div>

        <div>
          <Typography tag="h4" fontWeight="fw-md" className="mb-[1.6rem]">
            Policy {policyId}
          </Typography>
          <Typography tag="h4" fontWeight="fw-md" fontSize="fs-md">
            {amount}$
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryCard;
