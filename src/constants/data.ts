export type User = {
  id: number;
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
  id: number;
  title: string;
  slug: string;
  insuredAge: number;
  contractMonthTerm: number;
  feeAmount: number;
  rating: number;
  claimDetails: Claim[];
};

export type PolicyForm = Omit<Policy, "claimDetails" | "slug">;
export type ClaimForm = Omit<Claim, "id">;

export type Contract = {
  id: number;
  policyId: number;
  paymentMethod: number;
  createdAt: string;
  status: number;
  policy: Policy;
};
