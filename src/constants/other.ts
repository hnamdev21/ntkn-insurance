export const kB = 1024;
export const MB = kB * kB;

export const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Unknown",
    value: "unknown",
  },
];

export const roleOptions = [
  { label: "All", value: "" },
  { label: "Admin", value: "2" },
  { label: "User", value: "1" },
  { label: "Employee", value: "3" },
];

export const statusOptions = [
  { label: "All", value: "" },
  { label: "Pending", value: "1" },
  { label: "Active", value: "2" },
  { label: "Inactive", value: "3" },
];

export const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
];

export const paymentMethodOptions = [
  { label: "Credit Card", value: "1" },
  { label: "Loan", value: "2" },
];

export const defaultClaimOptions = [
  { label: "-- Select a contract --", value: "", disabled: true },
];
