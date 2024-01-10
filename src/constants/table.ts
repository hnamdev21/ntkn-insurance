const table = {
  USER: "users",
} as const;

export type Table = (typeof table)[keyof typeof table];
export default table;
