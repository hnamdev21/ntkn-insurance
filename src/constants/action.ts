const method = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
} as const;

export type Method = (typeof method)[keyof typeof method];
export default method;
