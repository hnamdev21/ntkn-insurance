const env = {
  ENVIRONMENT: process.env.NEXT_PUBLIC_APP_ENV || "development",

  API_DEPLOYMENT_URL: process.env.NEXT_PUBLIC_API_DEPLOYMENT_URL || "https://api.example.com",
  API_LOCAL_URL: process.env.NEXT_PUBLIC_API_LOCAL_URL || "http://localhost:4000",
} as const;

export default env;
