export type User = {
  id: string;
  fullName: string;
  email: string;
  address: string;
  phone: string;
  role: number;
  status: number;
};

export type Claim = {
  id: number;
  coverage: string;
  insuranceAmount: number;
  details: string;
};

export type Policy = {
  id?: number;
  title: string;
  slug: string;
  insuredAge: number;
  contractMonthTerm: number;
  feeAmount: number;
  claimDetails: Claim[];
};

export type PolicyForm = Omit<Policy, "claimDetails" | "slug">;
