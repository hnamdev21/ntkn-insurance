import * as yup from "yup";

export const MIN_AGE = 16;
export const MIN_CONTRACT_MONTH_TERM = 1;
export const MIN_FEE_AMOUNT = 100;

export const policyFormValidator = yup.object().shape({
  id: yup.number().optional(),
  title: yup.string().required("Please enter title"),
  insuredAge: yup
    .number()
    .required("Please enter insured age")
    .positive("Please enter a positive number")
    .integer("Please enter an integer")
    .min(MIN_AGE, "Please enter a number greater than " + MIN_AGE),
  contractMonthTerm: yup
    .number()
    .required("Please enter contract month term")
    .positive("Please enter a positive number")
    .integer("Please enter an integer")
    .min(MIN_CONTRACT_MONTH_TERM, "Please enter a number greater than " + MIN_CONTRACT_MONTH_TERM),
  feeAmount: yup
    .number()
    .required("Please enter fee amount")
    .positive("Please enter a positive number")
    .min(MIN_FEE_AMOUNT, "Please enter a number greater than " + MIN_FEE_AMOUNT),
});

export const updateClaimFormValidator = yup.object().shape({
  id: yup.number().required(),
  coverage: yup.string().required("Please enter coverage"),
  insuranceAmount: yup.number().required("Please enter insurance amount"),
  details: yup.string().required("Please enter details"),
});

export const createClaimFormValidator = yup.object().shape({
  policyId: yup.number().required("Please choose policy"),
  coverage: yup.string().required("Please enter coverage"),
  insuranceAmount: yup.number().required("Please enter insurance amount"),
  details: yup.string().required("Please enter details"),
});

export const createContractFormValidator = yup.object().shape({
  policyId: yup.number().required("Please choose policy"),
  email: yup.string().required("Please enter email").email("Please enter a valid email"),
  phone: yup.string().required("Please enter phone"),
  address: yup.string().required("Please enter address"),
  paymentMethod: yup.string().required("Please choose payment method"),
});
export type CreateContractFormValues = yup.InferType<typeof createContractFormValidator>;
