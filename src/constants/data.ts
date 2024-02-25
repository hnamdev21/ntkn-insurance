export type User = {
  id: number;
  fullName: string;
  email: string;
  address: string;
  phone: string;
  role: number;
  status: number;
};

export type ClaimDetail = {
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
  claimDetails: ClaimDetail[];
};

export type Contract = {
  id: number;
  policyId: number;
  paymentMethod: number;
  createdAt: string;
  status: number;
  policy: Policy;
};

export type ClaimImage = {
  id: number;
  claimRequestId: number;
  imagePath: string;
};

export type ClaimRequest = {
  id: number;
  contractId: number;
  claimId: number;
  content: string;
  status: number;
  claimImages: ClaimImage[];
  claimDetail: ClaimDetail;
};
