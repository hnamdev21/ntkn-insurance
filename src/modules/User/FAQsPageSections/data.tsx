import { CollapseItem } from "@/components/Collapse";
import Typography from "@/components/Typography";

import { StatusItem } from "./Sidebar";

export const items: StatusItem[] = [
  {
    label: "Contract services",
    value: "contract-services",
  },
  {
    label: "Insurance fee",
    value: "insurance-fee",
  },
  {
    label: "Health care benefits",
    value: "health-care-benefits",
  },
  {
    label: "Other",
    value: "other",
  },
];

const contractServiceCollapseItems = [
  {
    id: "1",
    label: "What is the contract service?",
    children: (
      <Typography tag="p">
        Contract service is a service that you can use to hire a freelancer or agency to help you
        with your project. You can hire a freelancer or agency based on their expertise, portfolio,
        and reviews.
      </Typography>
    ),
  },
  {
    id: "2",
    label: "How to use the contract service?",
    children: (
      <Typography tag="p">
        You can use the contract service by clicking the button below. After that, you will be
        redirected to the contract service page. You can choose the service that you need and fill
        in the form. After that, you will be contacted by our team to discuss the project.
      </Typography>
    ),
  },
  {
    id: "3",
    label: "How much does it cost?",
    children: (
      <Typography tag="p">
        The cost depends on the service that you choose. You can see the price list on the contract
        service page.
      </Typography>
    ),
  },
  {
    id: "4",
    label: "How long does it take?",
    children: (
      <Typography tag="p">
        The duration depends on the service that you choose. You can see the duration on the
        contract service page.
      </Typography>
    ),
  },
];

export const collapseItems: { [key: string]: CollapseItem[] } = {
  "contract-services": contractServiceCollapseItems,
};
